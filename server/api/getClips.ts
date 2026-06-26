import { adminDB } from "~/server/firestore";

export default defineEventHandler(async () => {
  const snapshot = await adminDB
    .collection("videoClips")
    .orderBy("createdDate", "desc")
    .limit(200)
    .get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      videoUrl: data.videoUrl,
      originalName: data.originalName,
      createdDate: data.createdDate,
    };
  });
});
