import { adminDB } from "../../firestore";

// https://firebase.google.com/docs/firestore/query-data/listen?hl=en

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id || "";

  const config = useAppConfig();
  console.log(config)

  const docRef = adminDB.collection("portraits").doc(id);
  const doc = await docRef.get();

  if (doc.exists) {
    return doc.data();
  } else {
    console.log(`No portrait found with id: ${id}`);
    return {
      status: 404,
      error: `No portrait found with id: ${id}`,
      id,
    };
  }
});
