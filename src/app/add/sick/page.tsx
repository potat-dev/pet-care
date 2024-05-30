'use client';

import { Button, Card, Container, Group, Stack, Title, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePickerInput } from '@mantine/dates';
import React from 'react';

export default function SicknessPage() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      startDate: new Date(),
      endDate: null,
      symptoms: '',
      treatment: '',
      notes: '',
    },
    validate: {
      name: (value) => (value ? null : 'Invalid sickness name'),
      startDate: (value) => (value ? null : 'Invalid start date'),
    },
  });

  const setToday = () => {
    form.setFieldValue('startDate', new Date());
  };

  return (
    <Container size="sm" px={0}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Title order={3}>Sickness record</Title>
        </Card.Section>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack gap="sm" mt="xs">
            <TextInput
              withAsterisk
              label="Name"
              placeholder="Enter sickness name"
              key={form.key('name')}
              {...form.getInputProps('name')}
            />

            <DatePickerInput
              withAsterisk
              clearable
              defaultValue={new Date()}
              label="Start Date"
              placeholder="Pick date and time"
              key={form.key('startDate')}
              {...form.getInputProps('startDate')}
            />

            <DatePickerInput
              clearable
              label="End Date"
              placeholder="Pick date and time"
              key={form.key('endDate')}
              {...form.getInputProps('endDate')}
            />

            <Textarea
              label="Symptoms"
              placeholder="Describe symptoms"
              minRows={3}
              key={form.key('symptoms')}
              {...form.getInputProps('symptoms')}
            />

            <Textarea
              label="Treatment"
              placeholder="Describe treatment"
              minRows={3}
              key={form.key('treatment')}
              {...form.getInputProps('treatment')}
            />

            <Textarea
              label="Notes"
              placeholder="Add any additional notes"
              minRows={2}
              key={form.key('notes')}
              {...form.getInputProps('notes')}
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
