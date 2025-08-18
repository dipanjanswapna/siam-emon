// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzI7gZ057us7u0xaNaYgT1u-6n9BagVms",
  authDomain: "sonar-bangla-vision.firebaseapp.com",
  projectId: "sonar-bangla-vision",
  storageBucket: "sonar-bangla-vision.firebasestorage.app",
  messagingSenderId: "731465679461",
  appId: "1:731465679461:web:76befd5d6af89c04ccfc8c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
