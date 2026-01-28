// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNYWTDtCnjwbYbz34C3dVnsTNddAEn1q0",
  authDomain: "sample-2ec2e.firebaseapp.com",
  projectId: "sample-2ec2e",
  storageBucket: "sample-2ec2e.firebasestorage.app",
  messagingSenderId: "317612402579",
  appId: "1:317612402579:web:7c101a372df9af897dea66",
  measurementId: "G-MP4NPZ33C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
