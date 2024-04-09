'use client';

import {
  Title,
  // Card,
  Image,
  Text,
  // Badge,
  // Button,
  // Group,
  // Code,
  // Paper,
  // AspectRatio,
  Stack,
  // Avatar,
} from '@mantine/core';

interface PetCardProps {
  name: string;
  owner: string;
  image: string;
}

export function PetCard({ name, owner, image }: PetCardProps) {
  return (
    <Stack w={150}>
      <Image radius="md" src={image} fallbackSrc="https://placehold.co/400" />
      <Stack gap={0}>
        <Title order={3}>{name}</Title>
        <Text c="dimmed">{owner}</Text>
      </Stack>
    </Stack>
  );

  // return (
  //   <Card withBorder radius="md" p={0}>
  //     <Group justify="space-between" wrap="nowrap" gap={0}>
  //       <Stack p="md">
  //         <Text
  //         tt="uppercase" c="dimmed" fw={700} size="xs">
  //           technology
  //         </Text>
  //         <Text mt="xs" mb="md">
  //           The best laptop for Frontend engineers in 2022
  //         </Text>
  //         <Group wrap="nowrap" gap="xs">
  //           <Group gap="xs" wrap="nowrap">
  //             <Avatar
  //               size={20}
  //               src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
  //             />
  //             <Text size="xs">Elsa Typechecker</Text>
  //           </Group>
  //           <Text size="xs" c="dimmed">
  //             •
  //           </Text>
  //           <Text size="xs" c="dimmed">
  //             Feb 6th
  //           </Text>
  //         </Group>
  //       </Stack>
  //       <Image
  //         src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
  //         height={160}
  //       />
  //     </Group>
  //   </Card>
  // );

  // return (
  //   <Paper shadow="md" radius="md" p="md" withBorder>
  //     <Group justify="space-between" gap="sm">
  //       <Text>test</Text>
  //       {/* <Stack gap="xs">
  //         <Title order={3}>
  //           {name} <Code>@{handle}</Code>
  //         </Title>
  //       </Stack> */}
  //       <AspectRatio maw={300} ratio={1}>
  //         <Image
  //           src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png"
  //           alt="Avatar"
  //         />
  //       </AspectRatio>
  //     </Group>
  //   </Paper>
  // );

  // return (
  //   <Card shadow="sm" padding="lg" radius="md" withBorder>
  //     <Card.Section>
  //       <Image
  //         src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
  //         height={160}
  //         alt="Norway"
  //       />
  //     </Card.Section>

  //     <Group justify="space-between" mt="md" mb="xs">
  //       <Text fw={500}>{name}</Text>
  //       {/* <Badge> */}
  //       <Code color="blue">@{handle}</Code>
  //       {/* </Badge> */}
  //       {/* <Badge>@{handle}</Badge> */}
  //     </Group>

  //     <Text size="sm" c="dimmed">
  //       With Fjord Tours you can explore more of the magical fjord landscapes with tours and
  //       activities on and around the fjords of Norway
  //     </Text>

  //     <Button color="blue" fullWidth mt="md" radius="md">
  //       Book classic tour now
  //     </Button>
  //   </Card>
  // );
}
