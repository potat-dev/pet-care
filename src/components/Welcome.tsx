'use client';

import { Title, Group, Button, List, Stack, Text } from '@mantine/core';
import { IconArrowRight, IconCheck } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthContext } from '@/firebase/context';
import userdata from '@/data/userdata';

export function Welcome() {
  const { user, signIn } = useAuthContext();
  const router = useRouter();

  const openRandomProfile = () => {
    const profiles = userdata.map((u) => u.username);
    const randomIndex = Math.floor(Math.random() * profiles.length);
    router.push(`/profile/${profiles[randomIndex]}`);
  };

  const buttons = user ? (
    <>
      <Button variant="light" color="gray" component={Link} href="/profile/denis">
        Your Profile
      </Button>
      <Button variant="filled" rightSection={<IconArrowRight />} component={Link} href="/dashboard">
        Dashboard
      </Button>
    </>
  ) : (
    <>
      <Button variant="light" color="gray" onClick={openRandomProfile}>
        Random Profile
      </Button>
      <Button variant="filled" rightSection={<IconArrowRight />} onClick={signIn}>
        Login Now
      </Button>
    </>
  );

  return (
    <Stack gap="sm">
      <Title order={1} c="blue" size="5rem" fw={800}>
        Pet Care
      </Title>
      <Title order={3} c="dimmed">
        Best app to track Your pet&apos;s health
        {/* <br />— trusted by over 10,000 pet owners */}
      </Title>
      <List my="md" spacing="sm" size="lg" center icon={<IconCheck size="1.5rem" stroke={2} />}>
        <List.Item>
          <Text fw={700}>Track your pet&apos;s health, mood, and activity</Text>
          {/* <Text>Stay organized and spot potential issues early</Text> */}
        </List.Item>
        <List.Item>
          <Text fw={700}>Receive tips and vaccinations reminders</Text>
          {/* <Text>Never miss a vet appointment, medication, or important event again</Text> */}
        </List.Item>
        <List.Item>
          <Text fw={700}>Connect with a community of pet owners</Text>
          {/* <Text>Ensure they&apos;re always up-to-date on essential care</Text> */}
        </List.Item>
      </List>
      <Group>{buttons}</Group>
    </Stack>
  );
}
