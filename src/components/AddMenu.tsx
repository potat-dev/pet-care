'use client';

import { Menu, Button, ActionIcon, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconVaccine,
  IconPawFilled,
  IconWeight,
  IconReportMedical,
  IconMoodSmile,
  IconPlus,
} from '@tabler/icons-react';

import Link from 'next/link';

const iconProps = {
  size: '1rem',
};

export function AddMenu({ onClick }: { onClick?: () => void }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  if (mobile) {
    return (
      <ActionIcon
        variant="subtle"
        color="gray"
        size="xl"
        radius="md"
        mr="xs"
        component={Link}
        href="/add"
        onClick={onClick}
      >
        <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </ActionIcon>
    );
  }

  return (
    <Menu trigger="hover" shadow="md" width={200}>
      <Menu.Target>
        <Button
          variant="subtle"
          color="gray"
          size="md"
          leftSection={<IconPlus {...iconProps} />}
          component={Link}
          href="/add"
        >
          Add
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Add or measure something</Menu.Label>

        <Menu.Item leftSection={<IconWeight {...iconProps} />} component={Link} href="/add/weight">
          Weight
        </Menu.Item>
        <Menu.Item leftSection={<IconMoodSmile {...iconProps} />} component={Link} href="/add/mood">
          Mood
        </Menu.Item>

        <Menu.Item
          leftSection={<IconReportMedical {...iconProps} />}
          component={Link}
          href="/add/sick"
        >
          Sickness
        </Menu.Item>

        <Menu.Item
          leftSection={<IconVaccine {...iconProps} />}
          component={Link}
          href="/add/vaccine"
        >
          Vaccine
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item leftSection={<IconPawFilled {...iconProps} />} component={Link} href="/add/pet">
          New pet
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
