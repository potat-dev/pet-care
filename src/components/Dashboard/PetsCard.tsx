import { Card, Title } from '@mantine/core';

export default function PetsCard() {
  return (
    <Card padding="lg" radius="md">
      <Card.Section inheritPadding py="sm">
        <Title order={3}>Favorite Pets</Title>
      </Card.Section>
    </Card>
  );
}
