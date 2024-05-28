'use client';

import { Card, Text, Group, Title, Container, Avatar, Stack, Space } from '@mantine/core';
import { useAuthContext } from '@/firebase/context';
import { CardsCarousel } from '@/components/CardsCarousel/CardsCarousel';
import { ImageGallery } from '@/components/ImageGallery';
import userdata from '@/data/userdata';
import { FriendsGrid } from '@/components/FriendsGrid';
import { UserDataCard } from '@/components/UserDataCard';

interface ProfilePageProps {
  username: string;
}

export default function HomePage({ params }: { params: ProfilePageProps }) {
  const userData = userdata.find((u) => u.username === params.username);
  if (!userData) return <UserNotFound />;

  const { loading, user } = useAuthContext();
  if (loading) return <Loading />;

  return (
    <>
      <Container size="md" px={0}>
        <Stack>
          <UserDataCard user={userData} />

          <Title order={2}>Best Moments</Title>
          <CardsCarousel cards={userData.cards} />

          <Title order={2}>Gallery</Title>
          <ImageGallery links={userData.images} />

          <Title order={2}>Friends</Title>
          <FriendsGrid friends={userData.friends} />

          <Space h="xl" />
        </Stack>
      </Container>
    </>
  );
}

function Loading() {
  return (
    <Container size="md" px={0}>
      <Stack align="center" justify="center" style={{ height: 300 }}>
        <Title order={1}>Loading...</Title>
      </Stack>
    </Container>
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
