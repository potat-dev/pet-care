'use client';

import { Grid } from '@mantine/core';
import PetsCard from './PetsCard';
import WeightCard from './WeightCard';
import MoodCard from './MoodCard';
import VaccinationCard from './VaccinationCard';
import { useAuthContext } from '@/firebase/context';
import { NotSignedCard } from '../NotSignedCard';

export function Dashboard() {
  const { user, loading } = useAuthContext();
  if (!loading && !user) return <NotSignedCard />;

  return (
    <Grid columns={10}>
      <Grid.Col span={{ base: 10, sm: 5, md: 4 }}>
        <PetsCard loading={loading} />
      </Grid.Col>
      <Grid.Col span={{ base: 10, sm: 5, md: 6 }}>
        <WeightCard loading={loading} />
      </Grid.Col>
      <Grid.Col span={{ base: 10, sm: 5, md: 6 }}>
        <MoodCard loading={loading} />
      </Grid.Col>
      <Grid.Col span={{ base: 10, sm: 5, md: 4 }}>
        <VaccinationCard loading={loading} />
      </Grid.Col>
    </Grid>
  );
}
