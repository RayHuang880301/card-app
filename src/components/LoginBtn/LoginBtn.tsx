import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { auth } from '@/config/firebase';

export default function LoginBtn() {
  const router = useRouter();

  const goPage = () => {
    router.push('/login');
  };

  const logout = async () => {
    await auth.signOut();
    router.push('/login');
  };

  return (
    <div>
      <Button
        px='10'
        py='5'
        rounded='3xl'
        border='2px'
        fontSize='lg'
        fontWeight='bold'
        _hover={{
          bg: 'white',
          color: 'black',
        }}
        onClick={auth.currentUser ? logout : goPage}
      >
        {auth.currentUser ? 'Logout' : 'Login'}
      </Button>
    </div>
  );
}
