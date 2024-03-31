'use client';

import { Menu, Button } from '@mantine/core';
import {
  IconLogin,
  IconUser,
  IconSettings2 as IconSettings,
  IconLogout,
  IconMoon,
  // IconSun,
  IconChevronDown,
  IconSwitchHorizontal,
} from '@tabler/icons-react';

import { useAuthContext } from '@/firebase/context';

const iconProps = {
  size: '1rem',
};

function LoginDropdown() {
  return (
    <Menu.Dropdown>
      <Menu.Label>Login with Google</Menu.Label>
      <Menu.Item leftSection={<IconLogin {...iconProps} />}>Login</Menu.Item>
    </Menu.Dropdown>
  );
}

// function AccountDropdown() {
//   return (
//     <Menu.Dropdown>
//       <Menu.Label>Account</Menu.Label>
//       <Menu.Item leftSection={<IconUser {...iconProps} />}>Profile</Menu.Item>
//       <Menu.Item leftSection={<IconSettings {...iconProps} />}>Settings</Menu.Item>
//       <Menu.Item leftSection={<IconLogout {...iconProps} />}>Logout</Menu.Item>
//       <Menu.Divider />
//       <Menu.Label>Theme</Menu.Label>
//       <Menu.Item leftSection={<IconMoon {...iconProps} />}>Dark theme</Menu.Item>
//     </Menu.Dropdown>
//   );
// }

function AccountDropdown() {
  return (
    <Menu.Dropdown>
      <Menu.Item leftSection={<IconUser {...iconProps} />}>Profile</Menu.Item>
      <Menu.Item leftSection={<IconSettings {...iconProps} />}>Settings</Menu.Item>
      <Menu.Item
        leftSection={<IconSwitchHorizontal {...iconProps} />}
        rightSection={<IconMoon {...iconProps} />}
      >
        Theme
      </Menu.Item>
      <Menu.Item color="red" leftSection={<IconLogout {...iconProps} />}>
        Logout
      </Menu.Item>
    </Menu.Dropdown>
  );
}

export function UserMenu() {
  const { loading, user } = useAuthContext();

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

      {user ? <AccountDropdown /> : <LoginDropdown />}
    </Menu>
  );
}
