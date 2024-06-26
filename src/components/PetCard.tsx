'use client';

import Link from 'next/link';
import { Title, Text, Stack, Avatar, Card, Group } from '@mantine/core';
import { PetData } from '@/interfaces/PetData';

interface PetCardProps {
  pet: PetData;
}

export function PetCard({ pet }: PetCardProps) {
  return (
    <Card
      component={Link}
      href={`/profile/${pet.owner}`}
      shadow="sm"
      padding="md"
      py={{ base: 'xs', sm: 'md' }}
      pr={{ base: 'xs', sm: 'md' }}
      radius="md"
      withBorder
    >
      <Group justify="space-between">
        <Stack gap={1}>
          <Title order={4}>{pet.name}</Title>
          <Text c="dimmed">{pet.status}</Text>
        </Stack>
        <Avatar src={pet.avatar} radius="xl" size="lg" />
      </Group>
    </Card>
  );
}
