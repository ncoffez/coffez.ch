import { db } from "../firestore";

// https://firebase.google.com/docs/firestore/query-data/listen?hl=en

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id || "";

  const docRef = db.collection("portraits").limit(10);
  const doc = await docRef.get();
});
