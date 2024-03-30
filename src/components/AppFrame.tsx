'use client';

import Link from 'next/link';
import { AppShell, Burger, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
// import classes from './MobileNavbar.module.css';

function LinkButton({ text, link, onClick }: { text: string; link: string; onClick?: () => void }) {
  return (
    <Button
      variant="subtle"
      color="gray"
      size="md"
      radius="md"
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
            <MantineLogo size={30} />
            <Group ml="xl" gap={0} visibleFrom="sm">
              <LinkButton text="Home" link="/" />
              <LinkButton text="About" link="/about" />
              <LinkButton text="Auth" link="/auth" />
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
