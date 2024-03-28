'use client';

import { useAuthContext } from '@/firebase/context';
import { Code, Container } from '@mantine/core';

export function TestComp() {
  const { loading, session, auth } = useAuthContext();
  return (
    <Container size="md">
      <Code block>{JSON.stringify({ loading, session, auth }, null, 2)}</Code>
    </Container>
  );
}
