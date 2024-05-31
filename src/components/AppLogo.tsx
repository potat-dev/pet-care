'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button, Tooltip, useMantineTheme } from '@mantine/core';
import { IconPawFilled } from '@tabler/icons-react';
import { useCounter, useMediaQuery } from '@mantine/hooks';

export function AppLogo({ onClick }: { onClick?: () => void }) {
  const isHome = usePathname() === '/';

  const secretNum = 15;
  const [opened, setOpened] = useState(false);
  const [text, setText] = useState('');
  const [count, handlers] = useCounter(0);

  const doEasterEgg = () => {
    handlers.increment();

    if (count === secretNum) {
      setText('You found it!');
      window.open('https://youtu.be/vSX00jfMh6g', '_blank');
      setOpened(false);
      handlers.reset();
      return;
    }

    if (count) setText(`Click me ${secretNum - count} more times!`);
    if (count >= (secretNum * 2) / 3) setOpened(true);
  };

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const handleClick = () => {
    if (onClick) onClick();
    if (isHome) doEasterEgg();
  };

  return (
    <Tooltip label={text} opened={opened}>
      <Button
        color={mobile ? 'gray' : 'blue'}
        variant="subtle"
        size="md"
        onClick={handleClick}
        leftSection={mobile ? null : <IconPawFilled />}
        component={isHome ? undefined : Link}
        href="/"
      >
        Pet Care
      </Button>
    </Tooltip>
  );
}
