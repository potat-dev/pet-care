'use client';

import { Card, Container, Title } from '@mantine/core';
import { ActionsGrid } from '@/components/ActionsGrid/ActionsGrid';

export default function HomePage() {
  return (
    <Container size="xs" px={0}>
      <Card padding="lg" radius="md">
        <Card.Section inheritPadding py="sm">
          <Title order={3}>What do want to add?</Title>
        </Card.Section>
        <ActionsGrid />
      </Card>
    </Container>
  );
}
