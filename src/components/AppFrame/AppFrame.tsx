'use client';

import Link from 'next/link';
import { ActionIcon, AppShell, Burger, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { IconMenu2 as IconMenu } from '@tabler/icons-react';

import { AppLogo } from '@/components/AppLogo';
import { UserMenu } from '../UserMenu';

import classes from './AppFrame.module.css';

interface AppFrameProps {
  children: React.ReactNode;
}

interface LinkButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
}

function LinkButton({ text, href, onClick }: LinkButtonProps) {
  return (
    <Button
      variant="subtle"
      color="gray"
      size="md"
      justify="start"
      onClick={onClick}
      component={Link}
      href={href}
    >
      {text}
    </Button>
  );
}

export function AppFrame({ children }: AppFrameProps) {
  const [opened, { toggle }] = useDisclosure();

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
            <AppLogo />
          </Group>
          <Group gap={0}>
            <Group gap={0} visibleFrom="sm">
              <LinkButton text="Pets" href="/pets" />
              <LinkButton text="Friends" href="/friends" />
            </Group>
            <UserMenu />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <LinkButton text="Home" href="/" onClick={toggle} />
        <LinkButton text="Pets" href="/pets" onClick={toggle} />
        <LinkButton text="Friends" href="/friends" onClick={toggle} />
        <LinkButton text="Settings" href="/settings" onClick={toggle} />
        <LinkButton text="About" href="/about" onClick={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
