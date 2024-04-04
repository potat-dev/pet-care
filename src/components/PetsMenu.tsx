'use client';

import { Menu, Badge, Button } from '@mantine/core';
import { IconCat, IconDog, IconList, IconPlus, IconChevronDown } from '@tabler/icons-react';

const iconProps = {
  size: '1rem',
};

export function PetsMenu() {
  return (
    <Menu trigger="hover" shadow="md" width={200}>
      <Menu.Target>
        <Button variant="subtle" color="gray" size="md" rightSection={<IconChevronDown />}>
          My pets
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Favourite</Menu.Label>
        <Menu.Item
          leftSection={<IconCat {...iconProps} />}
          rightSection={
            <Badge variant="light" color="blue">
              6.2 kg
            </Badge>
          }
        >
          Marcel
        </Menu.Item>
        <Menu.Item leftSection={<IconDog {...iconProps} />}>Jeronimo</Menu.Item>
        <Menu.Item leftSection={<IconCat {...iconProps} />}>Brosha</Menu.Item>
        <Menu.Divider />
        <Menu.Item leftSection={<IconList {...iconProps} />}>Show all</Menu.Item>
        <Menu.Item leftSection={<IconPlus {...iconProps} />}>Add new pet</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
