// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "sonar-bangla-vision",
  appId: "1:731465679461:web:76befd5d6af89c04ccfc8c",
  storageBucket: "sonar-bangla-vision.firebasestorage.app",
  apiKey: "AIzaSyCzI7gZ057us7u0xaNaYgT1u-6n9BagVms",
  authDomain: "sonar-bangla-vision.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "731465679461",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
