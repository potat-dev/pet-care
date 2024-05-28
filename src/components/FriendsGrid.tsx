import { SimpleGrid, Card, Stack, Group, Title, Text, Avatar } from '@mantine/core';
import Link from 'next/link';
import userdata from '@/data/userdata';

interface FriendsProps {
  friends: string[];
}

interface FriendCardProps {
  friend: string;
}

function FriendCard({ friend }: FriendCardProps) {
  const user = userdata.find((u) => u.username === friend);
  if (!user) return null;

  return (
    <Card
      component={Link}
      href={`/profile/${user.username}`}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
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

export function FriendsGrid({ friends }: FriendsProps) {
  return (
    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md" verticalSpacing="md">
      {friends.map((friend) => (
        <FriendCard friend={friend} key={friend} />
      ))}
    </SimpleGrid>
  );
}
