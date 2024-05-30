'use client';

import { Button, Card, Container, Group, Slider, Stack, Title, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateTimePicker } from '@mantine/dates';
import React from 'react';

export default function MoodPage() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      mood: 5,
      activity: 5,
      appetite: 5,
      date: new Date(),
    },
    validate: {
      mood: (value) => (value >= 0 && value <= 10 ? null : 'Invalid mood'),
      activity: (value) => (value >= 0 && value <= 10 ? null : 'Invalid activity'),
      appetite: (value) => (value >= 0 && value <= 10 ? null : 'Invalid appetite'),
      date: (value) => (value ? null : 'Invalid date'),
    },
  });

  const setToday = () => {
    form.setFieldValue('date', new Date());
  };

  const moodText = (num: number) => {
    if (num < 0 || num > 10) return 'Invalid';
    if (num <= 1) return 'Worst';
    if (num <= 3) return 'Bad';
    if (num <= 6) return 'Normal';
    if (num <= 8) return 'Good';
    if (num <= 10) return 'Awesome';
    return 'Normal';
  };

  return (
    <Container size="xs" px={0}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Title order={3}>Pet mood</Title>
        </Card.Section>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack gap="sm" mt="xs">
            <Stack gap={0}>
              <Text size="sm">Mood</Text>
              <Slider
                min={0}
                max={10}
                step={1}
                label={(value) => `${value} - ${moodText(value)}`}
                key={form.key('mood')}
                {...form.getInputProps('mood')}
                labelTransitionProps={{
                  transition: 'skew-down',
                  duration: 150,
                  timingFunction: 'linear',
                }}
              />
            </Stack>

            <Stack gap={0}>
              <Text size="sm">Activity</Text>
              <Slider
                min={0}
                max={10}
                step={1}
                label={(value) => `${value} - ${moodText(value)}`}
                key={form.key('activity')}
                {...form.getInputProps('activity')}
                labelTransitionProps={{
                  transition: 'skew-down',
                  duration: 150,
                  timingFunction: 'linear',
                }}
              />
            </Stack>

            <Stack gap={0}>
              <Text size="sm">Appetite</Text>
              <Slider
                min={0}
                max={10}
                step={1}
                label={(value) => `${value} - ${moodText(value)}`}
                key={form.key('appetite')}
                {...form.getInputProps('appetite')}
                labelTransitionProps={{
                  transition: 'skew-down',
                  duration: 150,
                  timingFunction: 'linear',
                }}
              />
            </Stack>

            <DateTimePicker
              // withAsterisk
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
