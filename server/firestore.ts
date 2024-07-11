import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const config = useRuntimeConfig();

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(config.FIREBASE_ADMIN_KEY)),
});

export const adminDB = getFirestore();
export const bucket = getStorage().bucket('coffez-ch.appspot.com')
