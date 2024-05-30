import { Card, Text, UnstyledButton, Grid, useMantineTheme } from '@mantine/core';
import {
  IconVaccine,
  IconPawFilled,
  IconWeight,
  IconReportMedical,
  IconMoodSmile,
} from '@tabler/icons-react';
import Link from 'next/link';
import classes from './ActionsGrid.module.css';

const actions = [
  { title: 'Weight', icon: IconWeight, color: 'blue', href: '/weight' },
  { title: 'Mood', icon: IconMoodSmile, color: 'yellow', href: '/mood' },
  { title: 'Sickness', icon: IconReportMedical, color: 'red', href: '/sick' },
  { title: 'Vaccine', icon: IconVaccine, color: 'teal', href: '/vaccine' },
  { title: 'New Pet', icon: IconPawFilled, color: 'violet', href: '/pet' },
];

export function ActionsGrid() {
  const theme = useMantineTheme();

  const items = actions.map((item) => (
    <Grid.Col span={6} key={item.title}>
      <UnstyledButton className={classes.item} component={Link} href={`/add/${item.href}`}>
        <item.icon color={theme.colors[item.color][6]} size="2rem" />
        <Text size="xs" mt={7}>
          {item.title}
        </Text>
      </UnstyledButton>
    </Grid.Col>
  ));

  return <Grid grow>{items}</Grid>;
}
