import { bucket } from "../firestore";

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);
  const { filename, data } = formData![0];

  const path = `images/events/${filename}`;
  await bucket.file(path).save(data, { contentType: "image/jpeg" });
  await bucket.file(path).makePublic();
  const downloadURL = bucket.file(path).publicUrl();
  return downloadURL;
})
