// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API,
  authDomain: "shop-app-a4513.firebaseapp.com",
  projectId: "shop-app-a4513",
  storageBucket: "shop-app-a4513.appspot.com",
  messagingSenderId: "841976445259",
  appId: "1:841976445259:web:bdd1235bd8156f00cd90ce",
  measurementId: "G-L5ENH9V72T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
