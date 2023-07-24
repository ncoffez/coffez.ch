import { db } from "../firestore";

// https://firebase.google.com/docs/firestore/query-data/listen?hl=en

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);

  const docRef = db.collection("portraits").doc(id);
  const doc = await docRef.get();

  if (doc.exists) return { status: 200, body: doc.data(), id };
  else {
    console.log(`No portrait found with id: ${id}`);
    return {
      status: 404,
      error: `No portrait found with id: ${id}`,
      id
    };
  }
});
