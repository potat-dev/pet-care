import { Card, Stack, Title } from '@mantine/core';
import { PetCard } from '../PetCard';
import { friendPets, myPets } from '@/data/petsdata';

export default function PetsCard() {
  return (
    <Card padding="lg" radius="md">
      <Card.Section inheritPadding py="sm">
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
  );
}
