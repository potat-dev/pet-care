import { Card, Skeleton, Stack, Title } from '@mantine/core';
import { PetCard } from '../PetCard';
import { friendPets, myPets } from '@/data/petsdata';

export default function PetsCard({ loading }: { loading: boolean }) {
  return (
    <Skeleton visible={loading}>
      <Card padding="lg" radius="md">
        <Card.Section inheritPadding py="sm" pb="xs">
          <Title order={3}>Favorite Pets</Title>
        </Card.Section>

        <Stack gap="md">
          {myPets.map((pet) => (
            <PetCard pet={pet} key={pet.name} />
          ))}

          {friendPets.map((pet) => (
            <PetCard pet={pet} key={pet.name} />
          ))}
        </Stack>
      </Card>
    </Skeleton>
  );
}
