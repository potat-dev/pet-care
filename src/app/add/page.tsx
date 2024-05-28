'use client';

import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box, Title } from '@mantine/core';
import { randomId } from '@mantine/hooks';

function NewPetForm() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />

      <Group justify="center" mt="xl">
        <Button
          onClick={() =>
            form.setValues({
              name: randomId(),
              email: `${randomId()}@mantine.dev`,
            })
          }
        >
          Set random values
        </Button>
      </Group>
    </Box>
  );
}

export default function HomePage() {
  return (
    <>
      <Title order={1} px="xl">
        Tell us about Your pet
      </Title>
      <NewPetForm />
    </>
  );
}
