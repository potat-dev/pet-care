import { Card, Container, Title, Text } from '@mantine/core';

export function NotSignedCard() {
  return (
    <Container size="xs" px={0}>
      <Card padding="lg" radius="md">
        <Title order={3}>You are not signed in!</Title>
        <Text>Sign in to access your pet&apos;s data</Text>
      </Card>
    </Container>
  );
}
