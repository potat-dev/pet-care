import { Container } from '@mantine/core';
import { Dashboard } from '@/components/Dashboard/Dashboard';

export default function HomePage() {
  return (
    <Container size="xl" px={0}>
      <Dashboard />
    </Container>
  );
}
