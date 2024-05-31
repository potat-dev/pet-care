import { Card, Skeleton, Stack, Title } from '@mantine/core';
import { VaccineCard } from '@/components/VaccineCard';
import { vaccineList } from '@/data/vaccdata';

export default function VaccinationCard({ loading }: { loading: boolean }) {
  return (
    <Skeleton visible={loading}>
      <Card padding="lg" radius="md">
        <Card.Section inheritPadding py="sm" pb="xs">
          <Title order={3}>Next Vaccinations</Title>
        </Card.Section>

        <Stack gap="md">
          {vaccineList.map((vaccine) => (
            <VaccineCard vaccine={vaccine} key={vaccine.name} />
          ))}
        </Stack>
      </Card>
    </Skeleton>
  );
}
