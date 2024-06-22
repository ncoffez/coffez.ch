import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const config = useRuntimeConfig();
  const firebaseConfig: {} = JSON.parse(config.public.FIREBASE_FRONTEND_KEY);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return { provide: { db } }
});
