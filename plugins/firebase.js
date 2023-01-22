// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY7PEpKzkcbbswBAmusNNBFpDdGAethE4",
  authDomain: "coffezv2.firebaseapp.com",
  projectId: "coffezv2",
  storageBucket: "coffezv2.appspot.com",
  messagingSenderId: "949160522929",
  appId: "1:949160522929:web:50f44aacc7015ca7c45e90",
  measurementId: "G-QBE95WMX0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const functions = getFunctions();
export const db = getFirestore();

export default db