import { initializeApp } from 'firebase/app';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as signOutUser,
  AuthError,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: 'pet-auth.potat.dev',
  projectId: 'potat-pet-care',
  storageBucket: 'potat-pet-care.appspot.com',
  messagingSenderId: '988816435340',
  appId: '1:988816435340:web:1f631ef50aea0a3890b3a9',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signIn = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    const { code, message } = error as AuthError;
    console.error(`Error ${code}: ${message}`);
  }
};

export const signOut = async () => {
  try {
    await signOutUser(auth);
  } catch (error) {
    const { code, message } = error as AuthError;
    console.error(`Error ${code}: ${message}`);
  }
};

export const db = getFirestore(app);

export default app;
