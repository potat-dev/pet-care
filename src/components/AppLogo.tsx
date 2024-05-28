'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@mantine/core';
import { IconPawFilled } from '@tabler/icons-react';
import { useCounter } from '@mantine/hooks';

export function AppLogo() {
  const isHome = usePathname() === '/';
  const [count, handlers] = useCounter(0);
  const doEasterEgg = () => {
    handlers.increment();
    if (isHome && count === 15) {
      window.open('https://youtu.be/vSX00jfMh6g', '_blank');
      handlers.reset();
    }
  };

  return (
    <Button
      // variant="transparent"
      variant="subtle"
      size="md"
      leftSection={<IconPawFilled />}
      onClick={isHome ? doEasterEgg : undefined}
      component={isHome ? undefined : Link}
      href="/"
    >
      Pet Care
    </Button>
  );
}
