'use client';

import { Button, Card, Container, Group, Stack, Title, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateTimePicker } from '@mantine/dates';
import React, { useState } from 'react';

export default function VaccinePage() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      vaccinationDate: new Date(),
      series: '',
      nextVaccinationDate: null,
      notes: '',
    },
    validate: {
      name: (value) => (value ? null : 'Invalid vaccine name'),
      vaccinationDate: (value) => (value ? null : 'Invalid vaccination date'),
    },
  });

  const setToday = () => {
    form.setFieldValue('vaccinationDate', new Date());
  };

  return (
    <Container size="sm" px={0}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Title order={3}>Vaccination Record</Title>
        </Card.Section>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack gap="sm" mt="xs">
            <TextInput
              withAsterisk
              label="Name"
              placeholder="Enter vaccine name"
              key={form.key('name')}
              {...form.getInputProps('name')}
            />

            <DateTimePicker
              withAsterisk
              clearable
              defaultValue={new Date()}
              label="Date"
              placeholder="Pick date and time"
              key={form.key('vaccinationDate')}
              {...form.getInputProps('vaccinationDate')}
            />

            <TextInput
              label="Series/Lot Number (optional)"
              placeholder="Enter series/lot number"
              key={form.key('series')}
              {...form.getInputProps('series')}
            />

            <DateTimePicker
              clearable
              label="Next Vaccination"
              placeholder="Pick date and time"
              key={form.key('nextVaccinationDate')}
              {...form.getInputProps('nextVaccinationDate')}
              // value={nextVaccinationDate}
            />

            <Textarea
              label="Notes (optional)"
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
