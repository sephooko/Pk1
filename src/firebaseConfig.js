// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP9DtaQeyqJOFljI5nwWNad-QwC9KoSWA",
  authDomain: "time-manager-2aaf2.firebaseapp.com",
  projectId: "time-manager-2aaf2",
  storageBucket: "time-manager-2aaf2.appspot.com",
  messagingSenderId: "15257914549",
  appId: "1:15257914549:web:74aa78f9fa41989cac82fc",
  measurementId: "G-FDG6PEZPNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
