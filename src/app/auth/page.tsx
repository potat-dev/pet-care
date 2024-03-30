'use client';

import { useRouter } from 'next/navigation';
import { Button, TextInput, Group, Text, Divider } from '@mantine/core';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthContext } from '@/firebase/context';

export default function AuthForm() {
  const router = useRouter();
  const { auth, loading } = useAuthContext();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Error signing in with Google:', error);
      // Handle errors gracefully (e.g., display an error message to the user)
    }
  };

  return (
    <div>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <h2>Welcome!</h2>
          <Group>
            <Button variant="outline" onClick={handleGoogleSignIn}>
              Sign in with Google
            </Button>
            <Divider my="sm" />
            {/* Optionally add email/password login if desired */}
            <TextInput label="Email" placeholder="your@email.com" />
            <TextInput label="Password" type="password" placeholder="••••••••" />
            <Button variant="gradient" disabled={loading}>
              Login with Email/Password
            </Button>
          </Group>
        </>
      )}
    </div>
  );
}
