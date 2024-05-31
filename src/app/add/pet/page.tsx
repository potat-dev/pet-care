'use client';

import {
  Text,
  Button,
  Card,
  Container,
  Group,
  Stack,
  Title,
  TextInput,
  Select,
  NumberInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePickerInput } from '@mantine/dates';
import { openAddConfirmationModal } from '@/components/ConfirmationModal';
import { NotSignedCard } from '@/components/NotSignedCard';
import { useAuthContext } from '@/firebase/context';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';

export default function AddPetPage() {
  const { user, loading } = useAuthContext();

  if (loading) return <LoadingSkeleton />;
  if (!loading && !user) return <NotSignedCard />;

  const form = useForm({
    initialValues: {
      name: '',
      species: '',
      breed: '',
      birthDate: new Date(),
      sex: '',
      weight: 0,
    },
    validate: {
      name: (value) => (value ? null : 'Invalid pet name'),
      species: (value) => (value ? null : 'Invalid species'),
      birthDate: (value) => (value ? null : 'Invalid birth date'),
      sex: (value) => (value ? null : 'Invalid sex'),
    },
  });

  return (
    <Container size="sm" px={0}>
      <Stack>
        <Card padding="lg" radius="md">
          <Card.Section inheritPadding py="sm">
            <Title order={3}>New Pet</Title>
          </Card.Section>

          <form onSubmit={form.onSubmit(() => openAddConfirmationModal('Pet added!'))}>
            <Stack gap="sm">
              <TextInput
                withAsterisk
                label="Name"
                placeholder="Enter pet's name"
                key={form.key('name')}
                {...form.getInputProps('name')}
              />

              <Select
                withAsterisk
                label="Species"
                placeholder="Select species"
                data={['Cat', 'Dog', 'Bird', 'Elephant', 'Other']}
                key={form.key('species')}
                {...form.getInputProps('species')}
              />

              <TextInput
                label="Breed"
                placeholder="Enter pet's breed"
                key={form.key('breed')}
                {...form.getInputProps('breed')}
              />

              <DatePickerInput
                withAsterisk
                clearable
                label="Birth Date"
                placeholder="Pick date"
                key={form.key('birthDate')}
                {...form.getInputProps('birthDate')}
              />

              <Select
                withAsterisk
                label="Sex"
                placeholder="Select sex"
                data={['Male', 'Female', 'Attack Helicopter 🚁']}
                key={form.key('sex')}
                {...form.getInputProps('sex')}
              />

              <NumberInput
                label="Weight (kg)"
                placeholder="Enter weight"
                clampBehavior="strict"
                decimalScale={2}
                step={0.1}
                min={0}
                key={form.key('weight')}
                {...form.getInputProps('weight')}
              />

              <Group justify="flex-end" mt="xs">
                <Button type="submit" variant="light">
                  Save
                </Button>
              </Group>
            </Stack>
          </form>
        </Card>

        <Text ta="center">Tell your pet: We already love him ♥</Text>
      </Stack>
    </Container>
  );
}
