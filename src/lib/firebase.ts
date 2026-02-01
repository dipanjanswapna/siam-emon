// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQwLHnTe5CxGuIOAjZZ8jdUi03rZLIoXc",
  authDomain: "drmonishacr.firebaseapp.com",
  projectId: "drmonishacr",
  storageBucket: "drmonishacr.firebasestorage.app",
  messagingSenderId: "727940272202",
  appId: "1:727940272202:web:6d3145e3db58e27c2256b3",
  measurementId: "G-3P0FPWX7EH"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
