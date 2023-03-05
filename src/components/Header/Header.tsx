import React from 'react';
import LoginBtn from '../LoginBtn/LoginBtn';
import { Flex, Spacer } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex bgColor='black' p={4} px='8' alignItems='center'>
      <Spacer />
      <LoginBtn />
    </Flex>
  );
}
