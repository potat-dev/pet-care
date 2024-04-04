// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as signOutUser,
  AuthError,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: 'pet-auth.potat.dev',
  projectId: 'potat-pet-care',
  storageBucket: 'potat-pet-care.appspot.com',
  messagingSenderId: '988816435340',
  appId: '1:988816435340:web:1f631ef50aea0a3890b3a9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// Define signIn function
export const signIn = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    // Handle Errors here.
    const { code, message } = error as AuthError;
    console.error(`Error ${code}: ${message}`);
  }
};

// Define signOut function
export const signOut = async () => {
  try {
    await signOutUser(auth);
  } catch (error) {
    // Handle Errors here.
    const { code, message } = error as AuthError;
    console.error(`Error ${code}: ${message}`);
  }
};

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Export the Firebase app
export default app;
