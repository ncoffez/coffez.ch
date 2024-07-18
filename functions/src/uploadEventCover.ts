import { bucket } from "./firestore";
import createResizedImageCopy from "./util/createResizedImageCopy";

export async function uploadEventCover(request: any) {
  const { imageBase64, name } = request.data; // Receive Base64
  console.log({ imageBase64, name }); // Verify receipt

  // Decode Base64 to Buffer
  const imageBuffer = Buffer.from(imageBase64, 'base64');
  const path = `images/events/${name}`;
  const resizedBuffer = await createResizedImageCopy(imageBuffer, "original", 300);
  await bucket.file(path).save(resizedBuffer);
  await bucket.file(path).makePublic();
  return bucket.file(path).publicUrl();

}