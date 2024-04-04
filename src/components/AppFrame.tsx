'use client';

import Link from 'next/link';
import { AppShell, Burger, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { AppLogo } from '@/components/AppLogo';
import { UserMenu } from '@/components/UserMenu';
import { PetsMenu } from '@/components/PetsMenu';

import { useAuthContext } from '@/firebase/context';

function LinkButton({ text, href, onClick }: { text: string; href: string; onClick?: () => void }) {
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

export function AppFrame({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure();
  const { user } = useAuthContext();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" pl={{ sm: 'md' }} pr="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group gap={0}>
              <AppLogo />
              <Group gap={0} visibleFrom="sm">
                <LinkButton text="Dashboard" href="/dashboard" />
                <LinkButton text="About" href="/about" />
              </Group>
            </Group>
            <Group gap={0} visibleFrom="sm">
              {user && <PetsMenu />}
              <UserMenu />
            </Group>
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <LinkButton text="Home" href="/" onClick={toggle} />
        <LinkButton text="About" href="/about" onClick={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
