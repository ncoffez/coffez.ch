import admin, { type ServiceAccount } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import rawServiceAccount from "./serviceAccount.env.json";

const serviceAccount = rawServiceAccount as ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = getFirestore();
