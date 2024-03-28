import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { ContextProvider } from '@/firebase/context';
import { theme } from './theme';

import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ContextProvider>{children}</ContextProvider>
        </MantineProvider>
      </body>
    </html>
  );
}

// export function BasicAppShell() {
//   const [opened, { toggle }] = useDisclosure();

//   return (
//     <AppShell
//       header={{ height: 60 }}
//       navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
//       padding="md"
//     >
//       <AppShell.Header>
//         <Group h="100%" px="md">
//           <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
//           <MantineLogo size={30} />
//         </Group>
//       </AppShell.Header>
//       <AppShell.Navbar p="md">
//         Navbar
//         {Array(15)
//           .fill(0)
//           .map((_, index) => (
//             <Skeleton key={index} h={28} mt="sm" animate={false} />
//           ))}
//       </AppShell.Navbar>
//       <AppShell.Main>Main</AppShell.Main>
//     </AppShell>
//   );
// }
