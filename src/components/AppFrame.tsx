'use client';

import Link from 'next/link';
import { AppShell, Burger, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';

import { UserMenu } from '@/components/UserMenu';
import { PetsMenu } from '@/components/PetsMenu';

function LinkButton({ text, link, onClick }: { text: string; link: string; onClick?: () => void }) {
  return (
    <Button
      variant="subtle"
      color="gray"
      size="md"
      justify="start"
      onClick={onClick}
      component={Link}
      href={link}
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
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group>
              <MantineLogo size={30} />
              <Group gap={0} visibleFrom="sm">
                <LinkButton text="Home" link="/" />
                <LinkButton text="About" link="/about" />
                <LinkButton text="Auth" link="/auth" />
              </Group>
            </Group>
            <Group gap={0} visibleFrom="sm">
              <PetsMenu />
              <UserMenu />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <LinkButton text="Home" link="/" onClick={toggle} />
        <LinkButton text="About" link="/about" onClick={toggle} />
        <LinkButton text="Auth" link="/auth" onClick={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
