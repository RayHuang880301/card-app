import { Flex, Heading, Spacer } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <Flex bgColor='black' p={6} alignItems='center' justify='center'>
      <Heading fontSize='lg' color='white' size='md'>
        Made by ❤️ InTag
      </Heading>
    </Flex>
  );
}
