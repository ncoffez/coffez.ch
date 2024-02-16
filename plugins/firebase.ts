import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import rawServiceAccount from "./serviceAccount.env.json";
import type { ServiceAccount } from "firebase-admin";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBxK3sW3_Htj-4uEz6yetCrWrVybJ3QCcc",
    authDomain: "coffez-ch.firebaseapp.com",
    databaseURL: "https://coffez-ch-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "coffez-ch",
    storageBucket: "coffez-ch.appspot.com",
    messagingSenderId: "1008451410892",
    appId: "1:1008451410892:web:c39aea5c1b90dc12501b69",
    measurementId: "G-LQY4FG2BEB",
  };
  const app = initializeApp(firebaseConfig);
  
  nuxtApp.provide("db", getFirestore(app));
});
