'use client';

import Lottie from 'lottie-react';
import { Container, Group, Stack, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Welcome } from '@/components/Welcome';
import petAnimation from '@/data/petanimation.json';

export default function HomePage() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const animationStyle = {
    height: mobile ? 500 : 700,
    margin: -100,
  };

  return mobile ? (
    <Container size="xl" py="xl">
      <Stack align="center" gap={0}>
        <Lottie animationData={petAnimation} style={animationStyle} loop />
        <Welcome />
      </Stack>
    </Container>
  ) : (
    <Container size="lg">
      <Group justify="center" grow>
        <Welcome />
        <Lottie animationData={petAnimation} style={animationStyle} loop />
      </Group>
    </Container>
  );
}
