// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5tpe2lijRFFnTLLzd_AVkMmMKH1TJO-A",
  authDomain: "carbonfootprint-71b71.firebaseapp.com",
  projectId: "carbonfootprint-71b71",
  storageBucket: "carbonfootprint-71b71.firebasestorage.app",
  messagingSenderId: "671759428842",
  appId: "1:671759428842:web:939cd4254a0b268ecc7b93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);