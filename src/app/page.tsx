import { Container } from '@mantine/core';
import { Dashboard } from '@/components/Dashboard/Dashboard';

export default function HomePage() {
  return (
    <Container size="lg" px={0}>
      <Dashboard />
    </Container>
  );
}
