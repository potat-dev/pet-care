'use client';

import { Button, Group, Title, NumberInput, Card, Stack, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateTimePicker } from '@mantine/dates';

export default function WeightForm() {
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
    <Container size="sm" px={0}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Title order={3}>Measure weight</Title>
        </Card.Section>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack gap="sm" mt="xs">
            <NumberInput
              label="Weight"
              placeholder="Enter weight in kg"
              decimalScale={2}
              step={0.1}
              key={form.key('weight')}
              {...form.getInputProps('weight')}
            />

            <DateTimePicker
              clearable
              defaultValue={new Date()}
              label="Date"
              placeholder="Pick date and time"
              key={form.key('date')}
              {...form.getInputProps('date')}
            />

            <Group justify="flex-end" mt="xs">
              <Button variant="subtle" onClick={setToday}>
                Set today
              </Button>
              <Button type="submit">Save</Button>
            </Group>
          </Stack>
        </form>
      </Card>
    </Container>
  );
}
