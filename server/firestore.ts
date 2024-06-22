import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

const config = useRuntimeConfig();

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(config.FIREBASE_ADMIN_KEY)),
});

export const adminDB = getFirestore();
