'use client';

import { Accordion } from '@mantine/core';
import { InfoItem } from '@/interfaces/InfoItem';

interface InfoItemProps {
  items: InfoItem[];
  shuffle?: boolean;
}

export function UsefulTips({ items: initValues, shuffle = true }: InfoItemProps) {
  const values = shuffle ? initValues.sort(() => Math.random() - 0.5) : initValues;

  const items = values.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion variant="filled" radius="md" defaultValue={values[0].value}>
      {items}
    </Accordion>
  );
}
