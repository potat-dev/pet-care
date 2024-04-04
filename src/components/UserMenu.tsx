'use client';

import { Menu, Button } from '@mantine/core';
import {
  IconUser,
  IconSettings2 as IconSettings,
  IconLogout,
  IconMoon,
  IconChartLine,
  // IconSun,
  IconChevronDown,
  IconChevronRight,
} from '@tabler/icons-react';

import { useAuthContext } from '@/firebase/context';

const iconProps = {
  size: '1rem',
};

function LoginButton() {
  const { loading, signIn } = useAuthContext();

  return (
    <Button
      variant="subtle"
      color="gray"
      size="md"
      loading={loading}
      onClick={signIn}
      rightSection={<IconChevronRight />}
    >
      Login
    </Button>
  );
}

function AccountDropdown() {
  const { loading, user, signOut } = useAuthContext();

  return (
    <Menu position="bottom-end" trigger="hover" shadow="md" width={200}>
      <Menu.Target>
        <Button
          variant="subtle"
          color="gray"
          size="md"
          loading={loading}
          rightSection={<IconChevronDown />}
        >
          {user ? user.displayName : 'Login'}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item leftSection={<IconUser {...iconProps} />}>Profile</Menu.Item>
        <Menu.Item leftSection={<IconChartLine {...iconProps} />}>Dashboard</Menu.Item>
        <Menu.Item leftSection={<IconSettings {...iconProps} />}>Settings</Menu.Item>
        <Menu.Divider />
        <Menu.Item leftSection={<IconMoon {...iconProps} />}>Dark theme</Menu.Item>
        <Menu.Item leftSection={<IconLogout {...iconProps} />} onClick={signOut} color="red">
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export function UserMenu() {
  const { user } = useAuthContext();

  if (user) return <AccountDropdown />;
  return <LoginButton />;
}
