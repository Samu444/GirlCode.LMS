// src/services/signup.js
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const handleSignup = async (userData) => {
  try {
    // 1. Create auth user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );

    // 2. Save additional data to Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), {
      name: userData.name,
      email: userData.email,
      role: "learner", // Consistent with your other code
      createdAt: new Date(),
    });

    return { success: true, user: userCredential.user };
  } catch (error) {
    return { 
      success: false, 
      error: error.message,
      code: error.code 
    };
  }
};