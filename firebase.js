
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// export const firebaseConfig = {
//     apiKey: process.env.VITE_API_KEY,
//     authDomain: process.env.VITE_AUTH_DOMAIN,
//     databaseURL: process.env.VITE_DATABASE_URL,
//     projectId: process.env.VITE_PROJECT_ID,
//     storageBucket: process.env.VITE_STORAGE_BUCKET,
//     messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID,
//     appId: process.env.VITE_APP_ID,
//     measurementId: process.env.VITE_MEASUREMENT_ID,
// };

const config = useAppConfig();

export const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app);
export const db = getFirestore();