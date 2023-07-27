import admin, { ServiceAccount } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const serviceAccount = process.env.adminServiceAccountKey as ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coffez-ch-default-rtdb.europe-west1.firebasedatabase.app",
});

export const db = getFirestore();
export const storage = getStorage();
export default admin;
