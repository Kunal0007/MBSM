// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSHQk35iWLqB17qPhKAtiNYIM8qNnvK9c",
  authDomain: "mbsm-25c28.firebaseapp.com",
  projectId: "mbsm-25c28",
  storageBucket: "mbsm-25c28.appspot.com",
  messagingSenderId: "401475765576",
  appId: "1:401475765576:web:77a5957a2cb6f63e9bdf7d",
  measurementId: "G-2FDL04QEEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);