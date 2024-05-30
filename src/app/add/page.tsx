'use client';

import { Container } from '@mantine/core';
import { ActionsGrid } from '@/components/ActionsGrid/ActionsGrid';

export default function HomePage() {
  return (
    <Container size="sm" px={0}>
      {/* <Title order={1} px="xl">
        Tell us about Your pet
      </Title> */}
      <ActionsGrid />
    </Container>
  );
}
