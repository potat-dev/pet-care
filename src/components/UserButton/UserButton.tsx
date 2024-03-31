'use client';

import { Button } from '@mantine/core';
import Link from 'next/link';
import { useAuthContext } from '@/firebase/context';
import Loading from '../Loader/Loader';

export function UserButton() {
  const { user, loading } = useAuthContext();

  // const handleSignOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //       console.log(error);
  //     });
  // };

  if (loading) {
    return <Loading className="text-white" />;
  }
  if (user) {
    // const displayName = session.displayName || session.email;
    // const title =
    //   displayName.slice(0, displayName.indexOf('@')).length <= 15
    //     ? displayName.slice(0, displayName.indexOf('@'))
    //     : `${displayName.slice(0, 10)}...`;

    // return (
    //   <Col>
    //     <Paper padding="md" shadow="xs">
    //       <Text>{title}</Text>
    //       <Menu>
    //         <MenuItem>
    //           <Link href="/profile">Profile</Link>
    //         </MenuItem>
    //         <MenuItem>
    //           <Button onClick={handleSignOut}>Sign out</Button>
    //         </MenuItem>
    //       </Menu>
    //     </Paper>
    //   </Col>
    // );

    return (
      <Link href="/auth">
        <Button>Signed In!!!</Button>
      </Link>
    );
  }
  return (
    <Link href="/auth">
      <Button>Sign in</Button>
    </Link>
  );
}
