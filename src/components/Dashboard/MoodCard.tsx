import { AreaChart } from '@mantine/charts';
import { Card, Title } from '@mantine/core';
import { mood } from '@/data/graphs/mood';

export default function MoodCard() {
  return (
    <Card padding="lg" radius="md">
      <Card.Section inheritPadding py="sm">
        <Title order={3}>Mood Graph</Title>
      </Card.Section>
      <AreaChart
        h={300}
        data={mood}
        dataKey="date"
        type="stacked"
        withLegend
        withGradient
        series={[
          { name: 'Mood', color: 'yellow' },
          { name: 'Activity', color: 'orange' },
          { name: 'Appetite', color: 'red' },
        ]}
        curveType="monotone"
      />
    </Card>
  );
}
