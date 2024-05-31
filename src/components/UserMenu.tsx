'use client';

import { Avatar, Menu, Button, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import {
  IconUser,
  IconChartLine as IconChart,
  IconLogout,
  IconMoon,
  IconChevronDown,
  IconChevronRight,
} from '@tabler/icons-react';

import Link from 'next/link';
import { useMediaQuery } from '@mantine/hooks';
import { useAuthContext } from '@/firebase/context';

const iconProps = {
  size: '1rem',
};

function LoginButton() {
  const { loading, signIn } = useAuthContext();

  return (
    <Button
      onClick={signIn}
      variant="subtle"
      color="gray"
      size="md"
      loading={loading}
      loaderProps={{ type: 'dots' }}
      rightSection={<IconChevronRight {...iconProps} />}
    >
      Login
    </Button>
  );
}

export function UserMenu({ onClick }: { onClick?: () => void }) {
  const { user, loading, signOut } = useAuthContext();
  const { toggleColorScheme } = useMantineColorScheme();

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  if (!user) return <LoginButton />;

  if (mobile) {
    return (
      <Avatar
        variant="light"
        radius="xl"
        size="md"
        src={user?.photoURL}
        component={Link}
        href="/profile/denis"
        onClick={onClick}
      />
    );
  }

  return (
    <Menu position="bottom-end" trigger="click-hover" shadow="md" width={200}>
      <Menu.Target>
        <Button
          variant="subtle"
          color="gray"
          size="md"
          loading={loading}
          loaderProps={{ type: 'dots' }}
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
        <Menu.Item leftSection={<IconChart {...iconProps} />} component={Link} href="/dashboard">
          Dashboard
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
