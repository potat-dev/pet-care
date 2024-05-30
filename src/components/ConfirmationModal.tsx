'use client';

import { Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useRouter } from 'next/router';

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
    confirmProps: { variant: 'light', },
    onConfirm: () => {
      const router = useRouter();
      router.push('/'); // Navigate to the dashboard route
    },
  });
