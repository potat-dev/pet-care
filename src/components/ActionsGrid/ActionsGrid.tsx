import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  useMantineTheme,
  Grid,
} from '@mantine/core';
import {
  IconVaccine,
  IconPawFilled,
  IconWeight,
  IconReportMedical,
  IconMoodSmile,
} from '@tabler/icons-react';
import classes from './ActionsGrid.module.css';

const actions = [
  { title: 'Weight', icon: IconWeight, color: 'violet' },
  { title: 'Mood', icon: IconMoodSmile, color: 'indigo' },
  { title: 'Sickness', icon: IconReportMedical, color: 'blue' },
  { title: 'Vaccine', icon: IconVaccine, color: 'green' },
  { title: 'New Pet', icon: IconPawFilled, color: 'teal' },
];

export function ActionsGrid() {
  const items = actions.map((item) => (
    <Grid.Col span={6}>
      <UnstyledButton key={item.title} className={classes.item}>
        <item.icon size="2rem" />
        <Text size="xs" mt={7}>
          {item.title}
        </Text>
      </UnstyledButton>
    </Grid.Col>
  ));

  return (
    <Card>
      <Grid grow>{items}</Grid>
    </Card>
  );

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group justify="space-between">
        <Text className={classes.title}>Services</Text>
        <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
          + 21 other services
        </Anchor>
      </Group>
      <SimpleGrid cols={2} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
