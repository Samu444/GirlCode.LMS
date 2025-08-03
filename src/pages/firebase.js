// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeHU6261jcNmojHSO1dhNLuA3B0HukweM",
  authDomain: "lms-pro-378c2.firebaseapp.com",
  projectId: "lms-pro-378c2",
  storageBucket: "lms-pro-378c2.firebasestorage.app",
  messagingSenderId: "707444707532",
  appId: "1:707444707532:web:c6c6427a0f798586a6b269"
};

// Initialize Firebase App only once
const app = initializeApp(firebaseConfig);

// Export auth and firestore instances based on the initialized app
export const auth = getAuth(app);
export const db = getFirestore(app);
