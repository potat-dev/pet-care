'use client';

import { Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import Link from 'next/link';

export const openAddConfirmationModal = (title: string) =>
  modals.openConfirmModal({
    title,
    children: (
      <Text size="sm">
        Item has been added to your dashboard. You can view it by clicking on the dashboard button.
      </Text>
    ),
    labels: { confirm: 'Dashboard', cancel: 'OK' },
    cancelProps: { variant: 'subtle', color: 'gray' },
    confirmProps: {
      variant: 'light',
      component: Link, // Mantine devs forgot to add this prop to the type definition
      href: '/dashboard',
    } as any, // So I need a type assertion to bypass the type check
  });
