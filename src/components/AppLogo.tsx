'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button, Tooltip, useMantineTheme } from '@mantine/core';
import { IconPawFilled } from '@tabler/icons-react';
import { useCounter, useMediaQuery } from '@mantine/hooks';

export function AppLogo() {
  const secretNum = 15;
  const isHome = usePathname() === '/';
  const [opened, setOpened] = useState(false);
  const [text, setText] = useState('');
  const [count, handlers] = useCounter(0);

  const doEasterEgg = () => {
    if (!isHome) return;
    handlers.increment();
    if (count === secretNum) {
      setText('You found it!');
      handlers.reset();
      window.open('https://youtu.be/vSX00jfMh6g', '_blank');
      setOpened(false);
      return;
    }
    if (count) setText(`Click me ${secretNum - count} more times!`);
    if (count >= (secretNum * 2) / 3) setOpened(true);
  };

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Tooltip label={text} opened={opened}>
      <Button
        color={mobile ? 'gray' : 'blue'}
        variant="subtle"
        size="md"
        leftSection={mobile ? null : <IconPawFilled />}
        onClick={isHome ? doEasterEgg : undefined}
        component={isHome ? undefined : Link}
        href="/"
      >
        Pet Care
      </Button>
    </Tooltip>
  );
}
