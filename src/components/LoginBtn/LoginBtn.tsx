import React, { useEffect, useMemo, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { auth } from '@/config/firebase';
import { useAccount, useDisconnect } from 'wagmi';

export default function LoginBtn() {
  const router = useRouter();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const shortenAddr = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(addr.length - 4, addr.length)}`;
  };
  const userName = useMemo(() => {
    if (address) {
      return shortenAddr(address);
    } else if (auth.currentUser) {
      return auth.currentUser.displayName;
    }
    return null;
  }, [address, auth.currentUser]);

  const goPage = () => {
    router.push('/login');
  };

  const logout = async () => {
    if (address) {
      disconnect();
    } else if (auth.currentUser) {
      await auth.signOut();
    }
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
        transition={'all 0.2s ease-in-out'}
        _hover={{
          bg: 'white',
          color: 'black',
          transform: 'scale(1.1)',
        }}
        _active={{
          transform: 'scale(0.9)',
        }}
        onClick={userName ? logout : goPage}
      >
        {userName ? userName : 'Login'}
      </Button>
    </div>
  );
}
