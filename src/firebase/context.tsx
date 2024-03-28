'use client';

import { useState, createContext, useContext } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, db } from '@/firebase/firebase';

interface ContextProps {
  session: User | null;
  loading: boolean;
  auth: typeof auth;
  db: typeof db;
}

const Context = createContext<ContextProps | undefined>(undefined);

export const ContextProvider = ({ children }: { children: any }) => {
  const [session, setSession] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (user) => {
    setSession(user || null);
    setLoading(false);
  });

  return <Context.Provider value={{ session, loading, auth, db }}>{children}</Context.Provider>;
};

export const useAuthContext = () => useContext(Context);
