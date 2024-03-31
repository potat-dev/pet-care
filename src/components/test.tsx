'use client';

import { Code, Container } from '@mantine/core';
import { useAuthContext } from '@/firebase/context';

export function TestComp() {
  const { loading, user, auth } = useAuthContext();
  return (
    <Container size="md">
      <Code block>{JSON.stringify({ loading, user, auth }, null, 2)}</Code>
    </Container>
  );
}
