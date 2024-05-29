import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import { AuthContextProvider } from '@/firebase/context';
import { AppFrame } from '@/components/AppFrame/AppFrame';
import { theme } from '@/app/theme';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';

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
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <AuthContextProvider>
            <AppFrame>{children}</AppFrame>
          </AuthContextProvider>
        </MantineProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
