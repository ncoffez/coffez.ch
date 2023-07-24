import admin, { ServiceAccount } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import * as rawServiceAccount from "./adminServiceAccountKey.json";

const serviceAccount = rawServiceAccount as ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coffez-ch-default-rtdb.europe-west1.firebasedatabase.app",
});

export const db = getFirestore();
export default admin;
