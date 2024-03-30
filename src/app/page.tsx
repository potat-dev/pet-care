import { Center, ScrollArea } from '@mantine/core';
import { Welcome } from '@/components/Welcome/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { UserButton } from '@/components/UserButton/UserButton';
import { TestComp } from '@/components/test';

export default function HomePage() {
  return (
    // <ScrollArea type="scroll" offsetScrollbars>
    <>
      <Welcome />
      <ColorSchemeToggle />
      <br />
      <Center>
        <UserButton />
      </Center>
      <TestComp />
    </>
    // </ScrollArea>
  );
}
