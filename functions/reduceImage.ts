import admin from "./firestore";
import slack from "./slack";
import sharp from "sharp";
import axios from "axios";
import { createQrCode } from "./createQrCode";
import { DocumentSnapshot } from "firebase-functions/v2/firestore";
import { logger } from "firebase-functions/v2";

const CHANNEL_IMPRIMANTES = "C05JJB9DRDY";

export async function reduceImage(snap: DocumentSnapshot, context: any) {
  const data = snap.data();

  // Get the URL of the image
  const url = data?.imageUrl;

  // Download the image
  const imageBuffer = await downloadImage(url);

  // Reduce the size of the image for print and add qrcode
  const qrCodeBuffer = await createQrCode(`https://coffez.ch/sales/${context.params.id}`);

  const [reducedImageBuffer, webpBuffer, jpgBuffer] = await Promise.all([
    sharp(imageBuffer)
      .resize(1025, 1450)
      .jpeg()
      .composite([
        {
          input: qrCodeBuffer,
          gravity: "northeast",
        },
      ])
      .toBuffer(),
    sharp(imageBuffer).resize(350).toFormat("webp").toBuffer(),
    sharp(imageBuffer).resize(350).jpeg().toBuffer(),
  ]);

  // Define paths for firebase storage
  const originalPath = `images/portraits/${context.params.id}/${context.params.id}.${data?.sourceType}`;
  const reducedPath = `images/portraits/${context.params.id}/${context.params.id}_reduced.jpg`;
  const webpPath = `images/portraits/webfeed/${context.params.id}.webp`;
  const jpgPath = `images/portraits/webfeed/${context.params.id}.jpg`;

  // Upload original and reduced images to Firebase storage
  const bucket = admin.storage().bucket("coffez-ch.appspot.com");

  await Promise.all([
    bucket.file(originalPath).save(imageBuffer, { contentType: "image/png" }),
    bucket.file(reducedPath).save(reducedImageBuffer, { contentType: "image/png" }),
    bucket.file(webpPath).save(webpBuffer, { contentType: "image/webp" }),
    bucket.file(jpgPath).save(jpgBuffer, { contentType: "image/jpeg" }),
  ]);

  await Promise.all([
    bucket.file(originalPath).makePublic(),
    bucket.file(reducedPath).makePublic(),
    bucket.file(webpPath).makePublic(),
    bucket.file(jpgPath).makePublic(),
  ]);

  const [originalUrl, reducedUrl, webpUrl, jpgUrl] = [
    bucket.file(originalPath).publicUrl(),
    bucket.file(reducedPath).publicUrl(),
    bucket.file(webpPath).publicUrl(),
    bucket.file(jpgPath).publicUrl(),
  ];

  // Update Firestore document with URLs of the stored images
  const newUrls = {
    urlFirebaseOriginal: originalUrl,
    urlFirebaseReduced: reducedUrl,
    urlFirebaseWebp: webpUrl,
    urlFirebaseJpg: jpgUrl,
  };

  await Promise.all([
    admin.firestore().collection("portraits").doc(context.params.id).update(newUrls),
    slack.files.upload({
      file: reducedImageBuffer,
      filename: `${context.params.id}.jpeg`,
      channels: data?.channel || CHANNEL_IMPRIMANTES,
      initial_comment: `Lien client: https://coffez.ch/sales/${context.params.id}`,
      thread_ts: data?.thread,
    }),
    admin
      .firestore()
      .collection("printQueue")
      .add({ ...data, ...newUrls, status: "ready" }),
  ]);
}

async function downloadImage(url: string) {
  logger.debug(`Function downloadImage launched with URL ${url}.`);
  const response = await axios.get(url, {
    responseType: "arraybuffer",
    headers: {
      Authorization: `Bearer ${process.env.SLACK_TOKEN}`, // replace with your Slack token
    },
  });
  return response.data;
}
