import { Skeleton } from '@mantine/core';

export function LoadingSkeleton() {
  return (
    <>
      <Skeleton height={12} radius="xl" />
      <Skeleton height={12} mt={8} radius="xl" />
      <Skeleton height={12} mt={8} width="70%" radius="xl" />
    </>
  );
}
