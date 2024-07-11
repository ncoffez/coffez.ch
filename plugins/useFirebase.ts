import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export default defineNuxtPlugin((nuxtApp) => {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const config = useRuntimeConfig();
  const firebaseConfig: {} = JSON.parse(config.public.FIREBASE_FRONTEND_KEY);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  return { provide: { db, auth } }
});
