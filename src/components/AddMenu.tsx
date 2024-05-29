'use client';

import { Menu, Button, useMantineColorScheme } from '@mantine/core';
import {
  IconVaccine,
  IconPawFilled,
  IconWeight,
  IconReportMedical,
  IconChartLine,
  // IconSun,
  IconChevronDown,
  IconChevronRight,
  IconMoodSmile,
  IconPlus,
} from '@tabler/icons-react';

import Link from 'next/link';

const iconProps = {
  size: '1rem',
};

export function AddMenu() {
  // const { loading, user, signOut } = useAuthContext();
  // const { toggleColorScheme } = useMantineColorScheme();

  // return (
  //   // <Button.Group variant="subtle">
  //   <Button variant="subtle" color="gray" size="md" leftSection={<IconPlus {...iconProps} />}>
  //     Add
  //   </Button>
  //   // <Button variant="default"></Button>
  //   // </Button.Group>
  // );

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
          href="/add/illness"
        >
          Illness
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
