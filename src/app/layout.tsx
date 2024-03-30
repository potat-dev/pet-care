import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { AuthContextProvider } from '@/firebase/context';
import { theme } from './theme';

import { AppFrame } from '@/components/AppFrame';

export const metadata = {
  title: 'Pet Care',
  description: 'Your Best Companion at Pets Health',
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
          <AuthContextProvider>
            <AppFrame>{children}</AppFrame>
          </AuthContextProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
