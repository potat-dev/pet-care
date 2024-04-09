import {
  // SimpleGrid,
  Stack,
  Title,
  // Text,
  Group,
  // Button,
  // Box,
  ScrollArea,
} from '@mantine/core';

import { PetCard } from '@/components/PetCard';

export function Dashboard() {
  return (
    <Stack gap="lg">
      <Title order={1} px="xl">
        Hello, Denis!
      </Title>
      <ScrollArea type="never">
        <Group wrap="nowrap" px="xl">
          <PetCard name="Marcel" owner="Your cat" image="marcel.jpg" />
          <PetCard name="Jeronimo" owner="Nastya's dog" image="jerra.jpg" />
          <PetCard name="Brosha" owner="Maxim's cat" image="brosha.jpg" />
          <PetCard name="Lazy ass" owner="Your cat" image="marcel.jpg" />
          <PetCard name="Buldozer" owner="Nastya's dog" image="jerra.jpg" />
          <PetCard name="Deputat" owner="Maxim's cat" image="brosha.jpg" />
          {/* <PetCard name="Marcel" owner="Your pet" image="https://placehold.co/400" />
          <PetCard name="Marcel" owner="Your pet" image="https://placehold.co/400" />
          <PetCard name="Marcel" owner="Your pet" image="https://placehold.co/400" /> */}
        </Group>
      </ScrollArea>
    </Stack>
  );
}

// export function Dashboard() {
//   return (
//     <Stack gap="lg">
//       {/* <Button variant="default">1</Button> */}
//       {/* <Button variant="default">2</Button> */}
//       {/* <Button variant="default">3</Button> */}
//       <Group justify="space-between">
//         <Stack gap="xs">
//           <Title order={1}>Hello, Denis!</Title>
//           <Text c="dimmed">All of your animals are doing well!</Text>
//         </Stack>

//         <Button size="md" variant="light" rightSection={<IconArrowRight />}>
//           Measure weight
//         </Button>
//       </Group>

//       {/* <SimpleGrid
//         cols={{ base: 1, sm: 2, lg: 3 }}
//         spacing={{ base: 10, sm: 'xl' }}
//         verticalSpacing={{ base: 'md', sm: 'xl' }}
//       > */}
//       <PetCard name="Marcel" handle="mars1an1n" />
//       {/* {Array.from({ length: 5 }).map((_, index) => (
//         <PetCard key={index} name="Norway Fjord Adventures" />
//       ))} */}
//       {/* </SimpleGrid> */}
//       <Stack gap="xs">
//         <Title order={2}>Your friends' pets</Title>
//         <Text c="dimmed">They're awesome!</Text>
//       </Stack>

//       <PetCard name="Jeronimo" handle="klops2003" />
//       <PetCard name="Brosha" handle="trotsky" />
//     </Stack>
//   );
// }
