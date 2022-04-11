// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDfip4uTBJiKWZQknsuTX3L5qcARvFmxs",
  authDomain: "travel-guru-practice-33eaa.firebaseapp.com",
  projectId: "travel-guru-practice-33eaa",
  storageBucket: "travel-guru-practice-33eaa.appspot.com",
  messagingSenderId: "562402291156",
  appId: "1:562402291156:web:dcba53c9329a5465c4ba41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;