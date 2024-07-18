import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const firebaseConfig: {} = JSON.parse(config.public.FIREBASE_FRONTEND_KEY);

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const auth = getAuth();
  const functions = getFunctions(app, "europe-west6");

  if (config.public.CUSTOM_ENV === 'emulators') {
    console.log('Using functions emulator.');
    connectFunctionsEmulator(functions, "127.0.0.1", 5001);
  }
  return {
    provide: { db, auth, functions }
  }
});
