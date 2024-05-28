import { Avatar, Card, Group, Stack, Title, Text } from '@mantine/core';
import { UserData } from './interfaces/UserData';

interface UserDataCardProps {
  user: UserData;
}

export function UserDataCard({ user }: UserDataCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between">
        <Stack gap={1}>
          <Title order={3}>{user.name}</Title>
          <Text c="dimmed">{user.status}</Text>
        </Stack>
        <Avatar src={user.avatar} radius="xl" size="lg" />
      </Group>
    </Card>
  );
}
