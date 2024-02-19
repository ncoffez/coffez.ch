import admin from "./firestore";
import slack from "./slack";
import sharp from "sharp";
import axios from "axios";
import { createQrCode } from "./createQrCode";
import { DocumentSnapshot, FirestoreEvent } from "firebase-functions/v2/firestore";
import { logger } from "firebase-functions/v2";

// const CHANNEL_IMPRIMANTES = "C05JJB9DRDY";

// export async function reduceImage(snap: DocumentSnapshot, context: any) {
export async function reduceImage(event: FirestoreEvent<DocumentSnapshot | any>) {
  logger.debug("Function reduceImage launched.");
  const data = event.data.data();
  logger.debug({ event });

  // Get the URL of the image
  const url = data?.imageUrl;
  logger.debug({ url });

  // Download the image
  const imageBuffer = await downloadImage(url);
  logger.debug("After downloadImage.");

  // Reduce the size of the image for print and add qrcode
  const qrCodeBuffer = await createQrCode(`https://coffez.ch/sales/${event.params.id}`);

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
  const originalPath = `images/portraits/${event.params.id}/${event.params.id}.${data?.sourceType}`;
  const reducedPath = `images/portraits/${event.params.id}/${event.params.id}_reduced.jpg`;
  const webpPath = `images/portraits/webfeed/${event.params.id}.webp`;
  const jpgPath = `images/portraits/webfeed/${event.params.id}.jpg`;

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
    admin.firestore().collection("portraits").doc(event.params.id).update(newUrls),
    slack.chat.postMessage({
      text: `Lien client: https://coffez.ch/sales/${event.params.id}`,
      channel: data?.channel,
      thread_ts: data?.thread,
    }),
    admin
      .firestore()
      .collection("printQueue")
      .add({ ...data, ...newUrls, status: "ready" }),
  ]);
  return "success";
}

async function downloadImage(url: string) {
  logger.debug(`Function downloadImage launched with URL ${url}.`);
  const response = await axios.get(url, {
    responseType: "arraybuffer",
    headers: {
      Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
    },
  });
  return response.data;
}
