import {
  Title,
  Text,
  // Anchor
} from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Pet Care
        </Text>
      </Title>
      <Title c="dimmed" ta="center">
        App to help you take care of your pets
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        App to help you take care of your pets
      </Text>
    </>
  );
}
