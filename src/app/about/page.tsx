'use client';

import Lottie from 'lottie-react';
import { Welcome } from '@/components/Welcome/Welcome';
import petAnimation from '@/data/petanimation.json';

export default function HomePage() {
  const animationStyle = {
    height: 500,
    marginTop: -80,
    marginBottom: -120,
  };

  return (
    <>
      <Lottie animationData={petAnimation} style={animationStyle} loop />
      <Welcome />
    </>
  );
}
