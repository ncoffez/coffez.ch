import { Request } from "firebase-functions/v2/https";
import admin from "./firestore";
import { logger } from "firebase-functions/v2";
import { Response } from "firebase-functions";
import { FieldValue } from "firebase-admin/firestore";

export async function getAppleShortcut(req: Request, res: Response): Promise<any> {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed, need POST");
  }

  let portrait = {
    originalName: req.headers.name,
    createdDate: FieldValue.serverTimestamp(),
    size: req.headers.size,
    sourceType: req.headers.type,
    sourceApplication: req.headers.application,
    sourceHeight: req.headers.height,
    sourceWidth: req.headers.width,
    imageUrl: "req.body.image",
  };

  // Upload to Firebase Storage
  const uploadedImageBuffer = Buffer.from(req.body, "base64");
  const bucket = admin.storage().bucket("coffez-ch.appspot.com");
  const bucketPath = `images/uploads/apple-shortcuts/${new Date().toISOString()}_${req.headers.name}`;

  const file = bucket.file(bucketPath);

  try {
    await file.save(uploadedImageBuffer, { metadata: { contentType: req.headers["content-type"] } });
    await file.makePublic();
    portrait.imageUrl = file.publicUrl();
  } catch (error) {
    // Handle upload errors here
    console.error("Upload failed:", error);
    res.status(500).send("Error uploading image");
  }

  // Upload to Firestore Database
  try {
    await admin.firestore().collection("portraits").doc().create(portrait);
    return res.status(200).send(`${portrait.originalName} a été publié sur coffez.ch/live`);
  } catch (error) {
    logger.error(`Upload to database failed.`, error);
    return res.status(500).send(`Erreur lors de la publication de ${portrait.originalName}: ${error}`);
  }
}
