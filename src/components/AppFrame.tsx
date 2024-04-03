'use client';

import Link from 'next/link';
import { AppShell, Burger, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { AppLogo } from '@/components/AppLogo';
import { UserMenu } from '@/components/UserMenu';
import { PetsMenu } from '@/components/PetsMenu';

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

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group gap={0}>
              <AppLogo />
              <Group gap={0} visibleFrom="sm">
                <LinkButton text="Dashboard" href="/dashboard" />
                <LinkButton text="About" href="/about" />
                <LinkButton text="Auth" href="/auth" />
              </Group>
            </Group>
            <Group gap={0} visibleFrom="sm">
              <PetsMenu />
              <UserMenu />
            </Group>
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <LinkButton text="Home" href="/" onClick={toggle} />
        <LinkButton text="About" href="/about" onClick={toggle} />
        <LinkButton text="Auth" href="/auth" onClick={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
