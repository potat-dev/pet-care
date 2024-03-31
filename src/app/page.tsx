import { Center } from '@mantine/core';
import { Welcome } from '@/components/Welcome/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import { UserButton } from '@/components/UserButton';
import { TestComp } from '@/components/test';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <br />
      <Center>
        <UserButton />
      </Center>
      <br />
      <TestComp />
    </>
  );
}
