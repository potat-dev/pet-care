import { Card, Container, Title, Text, Stack, Avatar, Group } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';

export function NotSignedCard() {
  return (
    <Container size="xs" px={0}>
      <Card shadow="sm" padding="lg" radius="md">
        <Group justify="space-between">
          <Stack gap={1}>
            <Title order={3}>You are not signed in!</Title>
            <Text c="dimmed">Sign in to access your pet&apos;s data</Text>
          </Stack>
          <Avatar src={null} radius="xl" size="lg" color="red">
            <IconAlertTriangle size="1.5rem" />
          </Avatar>
        </Group>
      </Card>
    </Container>
  );
}
