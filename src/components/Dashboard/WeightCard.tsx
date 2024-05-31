import { AreaChart } from '@mantine/charts';
import { Card, Skeleton, Title } from '@mantine/core';
import { weight } from '@/data/graphs/weight';

export default function WeightCard({ loading }: { loading: boolean }) {
  return (
    <Skeleton visible={loading}>
      <Card padding="lg" radius="md">
        <Card.Section inheritPadding py="sm">
          <Title order={3}>Weight Graph</Title>
        </Card.Section>
        <AreaChart
          h={300}
          data={weight}
          dataKey="date"
          withLegend
          series={[
            { name: 'Brosha', color: 'indigo.6' },
            { name: 'Marcel', color: 'blue.6' },
            { name: 'Djerik', color: 'teal.6' },
          ]}
          curveType="monotone"
        />
      </Card>
    </Skeleton>
  );
}
