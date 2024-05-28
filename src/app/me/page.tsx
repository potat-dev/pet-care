'use client';

import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Title,
  Container,
  Avatar,
  Stack,
} from '@mantine/core';
// import { Welcome } from '@/components/Welcome/Welcome';
import { useAuthContext } from '@/firebase/context';
// import { Carousel } from '@mantine/carousel';
import { CardsCarousel } from '@/components/CardsCarousel/CardsCarousel';
import { ImageGallery } from '@/components/ImageGallery';

function AccountCard() {
  const { loading, user } = useAuthContext();
  // const links: string[] = [
  //   '/placeholder/mars-01.jpg',
  //   '/placeholder/mars-02.jpg',
  //   '/placeholder/mars-03.jpg',
  //   '/placeholder/mars-04.jpg',
  //   '/placeholder/mars-05.jpg',
  //   '/placeholder/mars-06.jpg',
  //   '/placeholder/mars-07.jpg',
  //   '/placeholder/mars-08.jpg',
  //   '/placeholder/mars-09.jpg',
  //   '/placeholder/mars-10.jpg',
  //   '/placeholder/mars-11.jpg',
  // ];

  // optimize

  const links: string[] = Array.from(
    { length: 11 },
    (_, index) => `/placeholder/mars-${(index + 1).toString().padStart(2, '0')}.jpg`
  );

  const cards = [
    {
      image: '/placeholder/mars-08.jpg',
      title: 'Очень весенний, майский кот',
      category: '01.05.2024',
    },
    {
      image: '/placeholder/mars-06.jpg',
      title: 'Он любит апельсины',
      category: '04.05.2024',
    },
    {
      image: '/placeholder/mars-07.jpg',
      title: 'Ну какой же он милый дурачок',
      category: '21.04.2024',
    },
    {
      image: '/placeholder/mars-03.jpg',
      title: 'Не вдупляет что происходит',
      category: '17.05.2024',
    },
    {
      image: '/placeholder/mars-01.jpg',
      title: 'Добряк лежит',
      category: '11.03.2024',
    },
    {
      image: '/placeholder/mars-09.jpg',
      title: 'Зацените эти ушки!!',
      category: '21.04.2024',
    },
  ];

  return (
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

      <CardsCarousel cards={cards} />

      <Title order={3}>Image Gallery</Title>

      <ImageGallery links={links} />
    </Stack>
  );
}

export default function HomePage() {
  return (
    <>
      <Container size="md" px={0}>
        <AccountCard />
      </Container>
    </>
  );
}
