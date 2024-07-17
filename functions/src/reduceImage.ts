import admin, { bucket } from "./firestore";
import slack from "./slack";
import { downloadImage } from "./util/downloadImage";
import { createQrCode } from "./createQrCode";
import { DocumentSnapshot, FirestoreEvent } from "firebase-functions/v2/firestore";
import createResizedImageCopy from "./util/createResizedImageCopy";
import { Resize, ResizeWithImage } from "./classes/Resize";
import { ChatPostMessageArguments } from "@slack/web-api";

export async function reduceImage(event: FirestoreEvent<DocumentSnapshot | any>) {
  const data = event.data.data() as any;
  const { imageUrl: url, sourceApplication, channel, thread } = data;
  const { id } = event.params;

  // Download the image
  const { imageBuffer, contentType } = await downloadImage(url, sourceApplication);

  // Generate a QR code for the image
  const qrCodeBuffer = await createQrCode(`https://coffez.ch/sales/${id}`);
  const rootPath = `images/portraits/${id}/${id}`;

  [{ url }, { sourceApplication }, { contentType }, { channel }, { thread }, { id }, { rootPath }, { qrCodeBuffer: qrCodeBuffer ? true : false }, { imageBuffer: imageBuffer ? true : false }].forEach((value: Object) => {
    console.log(value ? `${Object.keys(value)[0]}: ${Object.values(value)[0]}` : `${Object.keys(value)[0]}: undefined`);
  })

  let resizes: Resize[] = [
    { name: "original", format: "original", resize: false, hasQRCode: false, path: `${rootPath}.${contentType.split("/")[1]}`, contentType },
    { name: "reduced", format: "jpg", resize: { x: 1025, y: 1450 }, hasQRCode: true, path: `${rootPath}_reduced.jpg`, contentType: "image/jpeg" },
    { name: "originalWithQR", format: "original", resize: false, hasQRCode: true, path: `${rootPath}_originalWithQR.${contentType.split("/")[1]}`, contentType },
    { name: "webp", format: "webp", resize: 350, hasQRCode: false, path: `${rootPath}.webp`, contentType: "image/webp" },
    { name: "jpg", format: "jpg", resize: 350, hasQRCode: false, path: `${rootPath}.jpg`, contentType: "image/jpeg" },
  ]

  resizes = await Promise.all(resizes.map(async (resize: any) => {
    console.log(`Creating ${resize.name} image copy.`);
    return { ...resize, image: await createResizedImageCopy(imageBuffer, resize.format, resize.resize, qrCodeBuffer) } as ResizeWithImage
  }))
  console.log(`Created image copies.`);

  await Promise.all((resizes as ResizeWithImage[]).map(async (resize) => {
    console.log(`bucket.file(${resize.path}).save(${resize.image ? true : false}, { contentType: ${resize.contentType}})`)
    bucket.file(resize.path).save(resize.image, { contentType: resize.contentType })
  }))

  await Promise.all(resizes.map(async (resize: any) => {
    bucket.file(resize.path).makePublic();
  }))

  resizes = resizes.map((resize: any) => {
    return { ...resize, url: bucket.file(resize.path).publicUrl() }
  })

  await admin.firestore().collection("portraits").doc(event.params.id).update(resizes.reduce((acc, current) => { return { ...acc, [current.name]: current.url } }));
  let message: ChatPostMessageArguments = {
    text: `Lien client: https://coffez.ch/sales/${id}`,
    channel: channel || process.env.SLACK_IMPRIMANTES,
  }
  if (thread) message.thread_ts = thread;
  await slack.chat.postMessage(message)
  return "success";
}

