import { Card, Title } from '@mantine/core';

export default function VaccinationCard() {
  return (
    <Card padding="lg" radius="md">
      <Card.Section inheritPadding py="sm" pb="xs">
        <Title order={3}>Next Vaccinations</Title>
      </Card.Section>
    </Card>
  );
}
