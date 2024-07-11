import sharp from "sharp";
import { bucket } from "../firestore";

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);
  const { filename, data } = formData![0];

  const reducedImageBuffer = await sharp(data).resize(1025, 1450).jpeg().toBuffer();
  console.log(`Reduced image buffer size: ${reducedImageBuffer.length}`);
  const path = `images/events/${filename}`;
  await bucket.file(path).save(reducedImageBuffer, { contentType: "image/jpeg" });
  await bucket.file(path).makePublic();
  const downloadURL = bucket.file(path).publicUrl();
  return downloadURL;
})
