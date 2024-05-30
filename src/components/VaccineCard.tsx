'use client';

import { Title, Text, Stack, Card, Group, Avatar } from '@mantine/core';
import { VaccineData } from '@/interfaces/VaccineData';

interface VaccineCardProps {
  vaccine: VaccineData;
}

export function VaccineCard({ vaccine }: VaccineCardProps) {
  return (
    <Card
      shadow="sm"
      padding="md"
      py={{ base: 'xs', sm: 'md' }}
      pr={{ base: 'xs', sm: 'md' }}
      radius="md"
      withBorder
    >
      <Group justify="space-between">
        <Stack gap={1}>
          <Title order={4}>{vaccine.name}</Title>
          <Text c="dimmed">{vaccine.info}</Text>
        </Stack>
        {/* <Avatar src={pet.avatar} radius="xl" size="lg" /> */}
        <Avatar radius="md" size="lg">
          {vaccine.date}
        </Avatar>
      </Group>
    </Card>
  );
}
