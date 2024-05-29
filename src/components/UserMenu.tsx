'use client';

import {
  Avatar,
  Menu,
  Button,
  useMantineColorScheme,
  useMantineTheme,
  UnstyledButton,
} from '@mantine/core';
import {
  IconUser,
  IconSettings2 as IconSettings,
  IconLogout,
  IconMoon,
  IconChevronDown,
  IconChevronRight,
} from '@tabler/icons-react';

import Link from 'next/link';
import { useMediaQuery } from '@mantine/hooks';
import { User } from 'firebase/auth';
import { forwardRef } from 'react';
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

interface UserAvatarProps extends React.ComponentPropsWithoutRef<'button'> {
  user: User | null;
}

const UserAvatar = forwardRef<HTMLButtonElement, UserAvatarProps>(
  ({ user, ...others }: UserAvatarProps, ref) => (
    <UnstyledButton ref={ref} {...others}>
      <Avatar variant="light" radius="xl" size="md" src={user?.photoURL} />
    </UnstyledButton>
  )
);

function AccountDropdown() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const { loading, user, signOut } = useAuthContext();
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <Menu position="bottom-end" trigger={mobile ? 'click' : 'hover'} shadow="md" width={200}>
      <Menu.Target>
        {mobile ? (
          <UserAvatar user={user} />
        ) : (
          <Button
            variant="subtle"
            color="gray"
            size="md"
            loading={loading}
            rightSection={<IconChevronDown {...iconProps} />}
          >
            {user ? user.displayName : 'Login'}
          </Button>
        )}
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
