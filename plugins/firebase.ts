import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import rawServiceAccount from "./serviceAccount.env.json";
import type { ServiceAccount } from "firebase-admin";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = rawServiceAccount as ServiceAccount;
  const app = initializeApp(firebaseConfig);

  nuxtApp.provide("db", getFirestore(app));
});
