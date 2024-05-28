'use client';

import { Card, Text, Group, Title, Container, Avatar, Stack } from '@mantine/core';
import { useAuthContext } from '@/firebase/context';
import { CardsCarousel } from '@/components/CardsCarousel/CardsCarousel';
import { ImageGallery } from '@/components/ImageGallery';
import userdata from '@/data/userdata';

interface ProfilePageProps {
  username: string;
}

export default function HomePage({ params }: { params: ProfilePageProps }) {
  const { loading, user } = useAuthContext();
  const userData = userdata.find((u) => u.username === params.username);
  if (!userData) return <UserNotFound />;

  return (
    <>
      <Container size="md" px={0}>
        <Stack>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between">
              <Stack gap={1}>
                <Title order={3}>{loading ? 'Your Account' : user?.displayName}</Title>
                <Text c="dimmed">Happy cat owner</Text>
              </Stack>
              <Avatar src={loading ? null : user?.photoURL} radius="xl" size="lg" />
            </Group>
          </Card>

          <Title order={3}>Best Moments</Title>

          <CardsCarousel cards={userData.cards} />

          <Title order={3}>Image Gallery</Title>

          <ImageGallery links={userData.images} />
        </Stack>
      </Container>
    </>
  );
}

function UserNotFound() {
  return (
    <Container size="md" px={0}>
      <Stack align="center" justify="center" style={{ height: 300 }}>
        <Title order={1}>User not found</Title>
      </Stack>
    </Container>
  );
}
