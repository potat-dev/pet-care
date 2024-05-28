'use client';

import { Carousel } from '@mantine/carousel';
// import { useMediaQuery } from '@mantine/hooks';
import { Paper, Title, Text } from '@mantine/core';
import classes from './CardsCarousel.module.css';

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

interface CardsCarouselProps {
  cards: CardProps[];
}

export function CardsCarousel({ cards }: CardsCarouselProps) {
  // const theme = useMantineTheme();
  // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = cards.map((item) => (
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
