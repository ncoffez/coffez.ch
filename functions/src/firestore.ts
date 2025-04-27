import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

admin.initializeApp({
  credential: admin.credential.cert('./serviceAccount.env.json'),
  databaseURL: "https://coffez-ch-default-rtdb.europe-west1.firebasedatabase.app",
});

export const db = getFirestore();
export const bucket = admin.storage().bucket("coffez-ch.appspot.com")
export default admin;