'use client';

import { Grid } from '@mantine/core';
import PetsCard from './PetsCard';
import WeightCard from './WeightCard';
import MoodCard from './MoodCard';
import VaccinationCard from './VaccinationCard';

export function Dashboard() {
  return (
    <Grid columns={10}>
      <Grid.Col span={4}>
        <PetsCard />
      </Grid.Col>
      <Grid.Col span={6}>
        <WeightCard />
      </Grid.Col>
      <Grid.Col span={6}>
        <MoodCard />
      </Grid.Col>
      <Grid.Col span={4}>
        <VaccinationCard />
      </Grid.Col>
    </Grid>
  );
}
