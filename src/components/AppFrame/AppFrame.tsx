'use client';

// import Link from 'next/link';
import {
  AppShell,
  // Burger,
  // Button,
  Container,
  Group,
} from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';

import { AppLogo } from '@/components/AppLogo';
import { UserMenu } from '@/components/UserMenu';
import { PetsMenu } from '@/components/PetsMenu';

import { useAuthContext } from '@/firebase/context';

import classes from '@/components/AppFrame/AppFrame.module.css';

// function LinkButton({ text, href, onClick }: { text: string; href: string; onClick?: () => void }) {
//   return (
//     <Button
//       variant="subtle"
//       color="gray"
//       size="md"
//       justify="start"
//       onClick={onClick}
//       component={Link}
//       href={href}
//     >
//       {text}
//     </Button>
//   );
// }

interface AppFrameProps {
  children: React.ReactNode;
}

export function AppFrame({ children }: AppFrameProps) {
  // const [opened, { toggle }] = useDisclosure();
  const { user } = useAuthContext();

  return (
    <AppShell
      header={{ height: 60 }}
      // navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Container size="md" px="md" className={classes.inner}>
          <AppLogo />
          <Group gap={0} visibleFrom="sm">
            {user && <PetsMenu />}
            <UserMenu />
          </Group>
          <Group gap={0} hiddenFrom="sm">
            {user && <PetsMenu />}
            <UserMenu />
          </Group>
        </Container>

        {/* <Group h="100%" pl={{ sm: 'md' }} pr="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group gap={0}>
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
        </Group> */}
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">
        <LinkButton text="Home" href="/" onClick={toggle} />
        <LinkButton text="About" href="/about" onClick={toggle} />
      </AppShell.Navbar> */}

      <AppShell.Main px={0}>
        <Container
          size="md"
          // px="md"
          px={0}
        >
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
