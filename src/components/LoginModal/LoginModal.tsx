import React, { useEffect, useState } from 'react';
import { Button, Center, Heading, Image, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { useToast } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import metamaskIcon from '../../assets/metamask.png';
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
} from '../../config/firebase';
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function LoginModal() {
  const router = useRouter();
  const toast = useToast();
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const { connect, isLoading: connectLoading } = useConnect({
    connector: new InjectedConnector(),
  });

  useEffect(() => {
    if (address || auth.currentUser) {
      router.push('/profile');
    }
  }, [address, auth.currentUser]);

  const login = async (provider: string) => {
    setIsLoading(true);
    try {
      switch (provider) {
        case 'metaMask':
          connect();
          break;
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
      bg='gray.400'
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
      <VStack direction='column' my='4' spacing={4} alignItems='stretch'>
        <Button
          isLoading={connectLoading}
          loadingText='Connecting...'
          onClick={() => login('metaMask')}
          leftIcon={
            <Image src={metamaskIcon.src} w='20px' h='20px' alt='metamask' />
          }
          justifyContent='left'
          rounded='3xl'
          px='12'
          py='6'
          fontSize='xl'
          transition={'all 0.2s ease-in-out'}
          _hover={{
            bgColor: 'blue.800',
            color: 'white',
            transform: 'scale(1.1)',
          }}
        >
          MetaMask
        </Button>
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
          transition={'all 0.2s ease-in-out'}
          _hover={{
            bgColor: 'blue.800',
            color: 'white',
            transform: 'scale(1.1)',
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
          transition={'all 0.2s ease-in-out'}
          _hover={{
            bgColor: 'blue.800',
            color: 'white',
            transform: 'scale(1.1)',
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
          transition={'all 0.2s ease-in-out'}
          _hover={{
            bgColor: 'blue.800',
            color: 'white',
            transform: 'scale(1.1)',
          }}
        >
          Twitter
        </Button>
      </VStack>
    </Center>
  );
}
