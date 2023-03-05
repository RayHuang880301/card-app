import React, { useState } from 'react';
import styles from './LoginModal.module.css';
import { Box, Button, Center, Flex, Heading, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
} from '../../config/firebase';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { useToast } from '@chakra-ui/react';
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LoginModal() {
  const router = useRouter();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const login = async (provider: string) => {
    setIsLoading(true);
    try {
      switch (provider) {
        case 'google':
          setSelectedProvider('google');
          await signInWithPopup(auth, googleProvider);
          break;
        case 'facebook':
          setSelectedProvider('facebook');
          const result = await signInWithPopup(auth, facebookProvider);
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential?.accessToken;
          const user = result.user;
          break;
        case 'twitter':
          setSelectedProvider('twitter');
          await signInWithPopup(auth, twitterProvider);
          break;
        default:
          break;
      }
      setIsLoading(false);
      setSelectedProvider(null);
      router.push('/profile');
    } catch (error) {
      setIsLoading(false);
      setSelectedProvider(null);
      toast({
        title: 'Authentication error',
        position: 'top',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Center
      bg='blue.200'
      flexDirection='column'
      justifyContent='start'
      rounded='3xl'
      p='2rem'
      w='30rem'
      h='400px'
      shadow={'xl'}
    >
      <Heading fontSize='2rem' color='white'>
        Login
      </Heading>
      <VStack direction='column' my='8' spacing={4} alignItems='stretch'>
        <Button
          isLoading={selectedProvider === 'google'}
          loadingText='Google'
          onClick={() => login('google')}
          leftIcon={<FontAwesomeIcon icon={faGoogle} />}
          justifyContent='left'
          rounded='3xl'
          px='12'
          py='6'
          fontSize='xl'
          _hover={{
            bgColor: 'blue.800',
            color: 'white',
          }}
        >
          Google
        </Button>
        <Button
          isLoading={selectedProvider === 'facebook'}
          loadingText='Facebook'
          onClick={() => login('facebook')}
          leftIcon={<FontAwesomeIcon icon={faFacebook} />}
          justifyContent='left'
          rounded='3xl'
          px='12'
          py='6'
          fontSize='xl'
          _hover={{
            bgColor: 'blue.800',
            color: 'white',
          }}
        >
          Facebook
        </Button>
        <Button
          isLoading={selectedProvider === 'twitter'}
          loadingText='Twitter'
          onClick={() => login('twitter')}
          leftIcon={<FontAwesomeIcon icon={faTwitter} />}
          justifyContent='left'
          rounded='3xl'
          px='12'
          py='6'
          fontSize='xl'
          _hover={{
            bgColor: 'blue.800',
            color: 'white',
          }}
        >
          Twitter
        </Button>
      </VStack>
    </Center>
  );
}
