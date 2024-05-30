'use client';

import { Button, Card, Container, Group, Stack, Title, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePickerInput } from '@mantine/dates';
import React from 'react';
import { UsefulTips } from '@/components/UsefulTips';
import tips from '@/data/useful';
import { openAddConfirmationModal } from '@/components/ConfirmationModal';

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
      <Stack>
        <Card padding="lg" radius="md">
          <Card.Section inheritPadding py="sm">
            <Title order={3}>Vaccination Record</Title>
          </Card.Section>

          <form onSubmit={form.onSubmit(() => openAddConfirmationModal('Vaccine added!'))}>
            <Stack gap="sm">
              <TextInput
                withAsterisk
                label="Name"
                placeholder="Enter vaccine name"
                key={form.key('name')}
                {...form.getInputProps('name')}
              />

              <DatePickerInput
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

              <DatePickerInput
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
        <Title order={2}>Useful Tips</Title>
        <UsefulTips items={tips.vaccine} />
      </Stack>
    </Container>
  );
}
