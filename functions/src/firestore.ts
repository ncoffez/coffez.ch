import admin, { ServiceAccount } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
const FIREBASE_SERVICE_ACCOUNT: ServiceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_STRING
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_STRING)
  : (() => {
      throw new Error("FIREBASE_SERVICE_ACCOUNT_STRING is not defined in environment variables");
    })();

admin.initializeApp({
  credential: admin.credential.cert(FIREBASE_SERVICE_ACCOUNT),
  databaseURL: "https://coffez-ch-default-rtdb.europe-west1.firebasedatabase.app",
});

export const db = getFirestore();
export const bucket = admin.storage().bucket("coffez-ch.appspot.com");
export default admin;
