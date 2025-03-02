// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo3n1CrwfYT5o4HYrs1XRgtjQjIRdGKG4",
  authDomain: "loginauth-ad8ea.firebaseapp.com",
  projectId: "loginauth-ad8ea",
  storageBucket: "loginauth-ad8ea.firebasestorage.app",
  messagingSenderId: "503527360715",
  appId: "1:503527360715:web:0aef11cd66c6b10373f34e",
  measurementId: "G-BHKF3G3DH9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {
  auth,
  analytics,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
