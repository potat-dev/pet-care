'use client';

import { Menu, Button, useMantineColorScheme } from '@mantine/core';
import {
  IconUser,
  IconSettings2 as IconSettings,
  IconLogout,
  IconMoon,
  IconChevronDown,
  IconChevronRight,
} from '@tabler/icons-react';

import Link from 'next/link';
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
      rightSection={<IconChevronRight {...iconProps} />}
    >
      Login
    </Button>
  );
}

function AccountDropdown() {
  const { loading, user, signOut } = useAuthContext();
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <Menu position="bottom-end" trigger="hover" shadow="md" width={200}>
      <Menu.Target>
        <Button
          variant="subtle"
          color="gray"
          size="md"
          loading={loading}
          rightSection={<IconChevronDown {...iconProps} />}
        >
          {user ? user.displayName : 'Login'}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item leftSection={<IconUser {...iconProps} />} component={Link} href="/profile/denis">
          Profile
        </Menu.Item>
        <Menu.Item leftSection={<IconSettings {...iconProps} />} component={Link} href="/settings">
          Settings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item leftSection={<IconMoon {...iconProps} />} onClick={toggleColorScheme}>
          Switch theme
        </Menu.Item>
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
