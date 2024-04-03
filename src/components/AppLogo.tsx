import Link from 'next/link';
import { Button } from '@mantine/core';
import { IconPawFilled } from '@tabler/icons-react';

export function AppLogo() {
  return (
    <Button
      variant="transparent"
      size="md"
      leftSection={<IconPawFilled />}
      component={Link}
      href="/"
    >
      Pet Care
    </Button>
  );
}
