// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: 'potat-pet-care.firebaseapp.com',
  projectId: 'potat-pet-care',
  storageBucket: 'potat-pet-care.appspot.com',
  messagingSenderId: '988816435340',
  appId: '1:988816435340:web:1f631ef50aea0a3890b3a9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Export the Firebase app
export default app;
