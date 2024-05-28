import { Welcome } from '@/components/Welcome/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import { Dashboard } from '@/components/Dashboard';
import { Demo } from '@/components/Test';

export default function HomePage() {
  return (
    <>
      {/* <Dashboard /> */}
      {/* <Welcome /> */}
      <ColorSchemeToggle />
      <br />
      <Demo />
    </>
  );
}
