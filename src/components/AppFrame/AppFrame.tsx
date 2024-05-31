'use client';

import Link from 'next/link';
import { AppShell, Burger, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { AppLogo } from '@/components/AppLogo';
import { UserMenu } from '@/components/UserMenu';

import classes from './AppFrame.module.css';
import { AddMenu } from '@/components/AddMenu';
import { useAuthContext } from '@/firebase/context';

interface AppFrameProps {
  children: React.ReactNode;
}

interface LinkButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
  visibleFrom?: 'sm' | 'md' | 'lg' | 'xl';
}

function LinkButton({ text, href, onClick, visibleFrom }: LinkButtonProps) {
  return (
    <Button
      variant="subtle"
      color="gray"
      size="md"
      justify="start"
      onClick={onClick}
      component={Link}
      href={href}
      visibleFrom={visibleFrom}
    >
      {text}
    </Button>
  );
}

export function AppFrame({ children }: AppFrameProps) {
  const [opened, { toggle, close }] = useDisclosure();
  const { user } = useAuthContext();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group className={classes.header} px="md">
          <Group gap={0}>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <AppLogo onClick={close} />
            {user && <LinkButton text="Dashboard" href="/dashboard" visibleFrom="sm" />}
          </Group>
          <Group gap={0}>
            {user && <AddMenu onClick={close} />}
            <UserMenu onClick={close} />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <LinkButton text="Home" href="/" onClick={toggle} />
        <LinkButton text="Dashboard" href="/dashboard" onClick={toggle} />
        <LinkButton text="Profile" href="/profile/denis" onClick={toggle} />
        <LinkButton text="Settings" href="/settings" onClick={toggle} />
        <LinkButton text="About" href="/about" onClick={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
