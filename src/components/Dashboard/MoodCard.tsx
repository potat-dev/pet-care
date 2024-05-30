import { Card, Title } from '@mantine/core';

export default function MoodCard() {
  return (
    <Card padding="lg" radius="md">
      <Card.Section inheritPadding py="sm">
        <Title order={3}>Mood Graph</Title>
      </Card.Section>
    </Card>
  );
}
