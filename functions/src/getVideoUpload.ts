import { onRequest } from "firebase-functions/v2/https";
import { randomUUID } from "crypto";
import { db, bucket } from "./firestore";
import Busboy from "busboy";

export const getVideoUpload = onRequest(
  { cors: true, timeoutSeconds: 300, memory: "1GiB" },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    try {
      const contentType = (req.headers["content-type"] as string) || "";
      let buffer: Buffer | undefined;
      let originalName = `clip-${Date.now()}.mov`;
      let mimeType = "video/quicktime";

      if (contentType.includes("multipart/form-data")) {
        const result = await parseMultipart(req, contentType);
        buffer = result.buffer;
        if (result.filename) originalName = result.filename;
        if (result.mimeType) mimeType = result.mimeType;
      } else {
        buffer = req.rawBody;
        if (typeof req.headers["name"] === "string") originalName = req.headers["name"] as string;
        if (contentType) mimeType = contentType;
      }

      if (!buffer || buffer.length === 0) {
        res.status(400).send("Empty video payload");
        return;
      }

      const safeName = `${Date.now()}-${randomUUID()}-${originalName.replace(/[^a-zA-Z0-9.\-_]/g, "_")}`;
      const filePath = `videos/uploads/${safeName}`;
      const file = bucket.file(filePath);

      await file.save(buffer, { metadata: { contentType: mimeType }, public: true });

      const videoUrl = `https://storage.googleapis.com/${bucket.name}/${filePath}`;

      await db.collection("videoClips").add({
        videoUrl,
        originalName,
        size: buffer.length,
        contentType: mimeType,
        createdDate: new Date().toISOString(),
        sourceType: "auto-upload",
      });

      res.status(200).send({ ok: true, videoUrl });
    } catch (err) {
      console.error("getVideoUpload error:", err);
      res.status(500).send("Upload failed");
    }
  }
);

function parseMultipart(
  req: any,
  contentType: string
): Promise<{ buffer: Buffer; filename?: string; mimeType?: string }> {
  return new Promise((resolve, reject) => {
    const bb = Busboy({ headers: { "content-type": contentType } });
    let buffer = Buffer.alloc(0);
    let filename: string | undefined;
    let mimeType: string | undefined;

    bb.on("file", (_name: string, file: any, info: any) => {
      filename = info.filename;
      mimeType = info.mimeType;
      const chunks: Buffer[] = [];
      file.on("data", (chunk: Buffer) => chunks.push(chunk));
      file.on("end", () => { buffer = Buffer.concat(chunks); });
    });

    bb.on("finish", () => resolve({ buffer, filename, mimeType }));
    bb.on("error", reject);
    bb.end(req.rawBody);
  });
}
