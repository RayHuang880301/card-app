import { Flex } from '@chakra-ui/react';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Layout(
  children: ReactElement<JSXElementConstructor<any>>
) {
  return (
    <Flex h='100vh' w='100%' flexDirection='column'>
      <Header />
      {children}
      <Footer />
    </Flex>
  );
}
