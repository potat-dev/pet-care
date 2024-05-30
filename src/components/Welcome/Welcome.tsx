'use client';

import { Title, Text, Group, Button, Space } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import classes from './Welcome.module.css';
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
      <Button variant="filled" rightSection={<IconArrowRight />} component={Link} href="/">
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
    <>
      <Title className={classes.title} ta="center">
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'cyan.5', to: 'blue.4' }}
        >
          Pet Care
        </Text>
      </Title>
      <Title order={2} c="dimmed" ta="center" textWrap="balance">
        App to track your pet&apos;s health
      </Title>
      <Space h="lg" />
      <Group justify="center">{buttons}</Group>
    </>
  );
}
