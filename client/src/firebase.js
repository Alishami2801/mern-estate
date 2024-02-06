// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e2e5d.firebaseapp.com",
  projectId: "mern-estate-e2e5d",
  storageBucket: "mern-estate-e2e5d.appspot.com",
  messagingSenderId: "151357371224",
  appId: "1:151357371224:web:56d7dfc5a47efe38852b2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);