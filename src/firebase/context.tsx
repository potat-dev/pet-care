'use client';

import { useState, createContext, useContext } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, db } from '@/firebase/firebase';

interface ContextProps {
  auth: typeof auth;
  user: User | null;
  loading: boolean;
  db: typeof db;
}

const Context = createContext<ContextProps>({} as ContextProps);

export const AuthContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser || null);
    setLoading(false);
  });

  return <Context.Provider value={{ auth, user, loading, db }}>{children}</Context.Provider>;
};

export const useAuthContext = () => useContext(Context);
