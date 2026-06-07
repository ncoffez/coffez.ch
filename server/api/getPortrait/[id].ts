import { adminDB } from "~/server/firestore";

// https://firebase.google.com/docs/firestore/query-data/listen?hl=en

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id || "";

  const docRef = adminDB.collection("portraits").doc(id);
  const doc = await docRef.get();

  if (doc.exists) {
    return doc.data();
  } else {
    return {
      status: 404,
      error: `No portrait found with id: ${id}`,
      id,
    };
  }
});
