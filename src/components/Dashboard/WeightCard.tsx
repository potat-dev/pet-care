import { AreaChart } from '@mantine/charts';
import { Card, Title } from '@mantine/core';
import { weight } from '@/data/graphs/weight';

export default function WeightCard() {
  return (
    <Card padding="lg" radius="md">
      <Card.Section inheritPadding pt="sm" pb={0}>
        <Title order={3}>Weight Graph</Title>
      </Card.Section>
      <AreaChart
        h={300}
        data={weight}
        dataKey="date"
        withLegend
        series={[
          { name: 'Marcel', color: 'indigo.6' },
          { name: 'Brosha', color: 'blue.6' },
          { name: 'Djerik', color: 'teal.6' },
        ]}
        curveType="monotone"
      />
    </Card>
  );
}
