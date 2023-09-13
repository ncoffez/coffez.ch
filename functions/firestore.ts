import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

admin.initializeApp({
  credential: admin.credential.cert('./serviceAccount.env.json'),
  databaseURL: "https://coffez-ch-default-rtdb.europe-west1.firebasedatabase.app",
});

export const db = getFirestore();
export const storage = getStorage();
export default admin;
