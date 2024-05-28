'use client';

import { Carousel } from '@mantine/carousel';
// import { useMediaQuery } from '@mantine/hooks';
import { Paper, Title, Text } from '@mantine/core';
import classes from './CardsCarousel.module.css';

const data = [
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

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${image})`,
      }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      {/* <Button variant="white" color="dark">
        Read article
      </Button> */}
    </Paper>
  );
}

export function CardsCarousel() {
  // const theme = useMantineTheme();
  // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      classNames={classes}
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap="md"
      // slideGap={{ base: 'xl',  }}
      align="start"
      // slidesToScroll={mobile ? 1 : 2}
      // slidesToScroll={1}
      loop
    >
      {slides}
    </Carousel>
  );
}
