import React from 'react';
import LoginBtn from '../LoginBtn/LoginBtn';
import { Flex, Spacer, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <Flex bgColor='black' p={4} px='12' alignItems='center'>
      <Text
        fontSize='4xl'
        color='white'
        fontWeight='900'
        transition='all 0.2s ease-in-out'
        _hover={{
          transform: 'scale(1.1)',
          color: 'red.500',
          cursor: 'pointer',
        }}
        _active={{
          transform: 'scale(0.9)',
        }}
        onClick={() => router.push('/')}
      >
        ❤️ InTag
      </Text>
      <Spacer />
      <LoginBtn />
    </Flex>
  );
}
