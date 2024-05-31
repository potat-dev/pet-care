'use client';

import { Button, Group, Title, NumberInput, Card, Stack, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePickerInput } from '@mantine/dates';
import { UsefulTips } from '@/components/UsefulTips';
import tips from '@/data/useful';
import { openAddConfirmationModal } from '@/components/ConfirmationModal';
import { NotSignedCard } from '@/components/NotSignedCard';
import { useAuthContext } from '@/firebase/context';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';

export default function WeightForm() {
  const { user, loading } = useAuthContext();

  if (loading) return <LoadingSkeleton />;
  if (!loading && !user) return <NotSignedCard />;

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      weight: 0,
      date: new Date(),
    },

    validate: {
      weight: (value) => (value && value !== 0 ? null : 'Invalid weight'),
      date: (value) => (value ? null : 'Invalid date'),
    },
  });

  const setToday = () => {
    form.setFieldValue('date', new Date());
  };

  return (
    <Container size="xs" px={0}>
      <Stack>
        <Card padding="lg" radius="md">
          <Card.Section inheritPadding py="sm">
            <Title order={3}>Measure Weight</Title>
          </Card.Section>

          <form onSubmit={form.onSubmit(() => openAddConfirmationModal('Weight record added!'))}>
            <Stack gap="sm">
              <NumberInput
                // withAsterisk
                label="Weight"
                placeholder="Enter weight in kg"
                clampBehavior="strict"
                decimalScale={2}
                step={0.1}
                min={0}
                key={form.key('weight')}
                {...form.getInputProps('weight')}
              />

              <DatePickerInput
                // withAsterisk
                clearable
                defaultValue={new Date()}
                label="Date"
                placeholder="Pick date and time"
                key={form.key('date')}
                {...form.getInputProps('date')}
              />

              <Group justify="flex-end" mt="xs">
                <Button variant="subtle" color="gray" onClick={setToday}>
                  Set today
                </Button>
                <Button type="submit" variant="light">
                  Save
                </Button>
              </Group>
            </Stack>
          </form>
        </Card>

        <Title order={3}>Useful Tips</Title>
        <UsefulTips items={tips.weight} />
      </Stack>
    </Container>
  );
}
