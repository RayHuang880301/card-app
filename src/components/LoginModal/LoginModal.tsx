import React, { useEffect, useMemo, useState } from 'react';
import {
  Center,
  Heading,
  Image,
  Text,
  Icon,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { signInWithPopup } from 'firebase/auth';
import { useToast } from '@chakra-ui/react';
import { useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import metamaskIcon from '../../assets/metamask.png';
import { auth, googleProvider } from '../../config/firebase';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import axios from 'axios';

type Props = {
  key: string;
};

export default function LoginModal(props: Props) {
  const { key } = props;
  const router = useRouter();
  const toast = useToast();
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const { connect, isLoading: connectLoading } = useConnect({
    connector: new InjectedConnector(),
  });

  const profileKey = useMemo(() => {}, [key]);

  useEffect(() => {
    if (address || auth.currentUser) {
      router.push('/profile?key=' + profileKey);
    }
  }, [address, auth.currentUser]);

  const getProfileKey = async () => {
    if (address || auth.currentUser) {
      const res = await axios.get(
        'https://api.wagmi.io/api/v1/profiles/key?address=' +
          (address || auth.currentUser?.uid)
      );
      if (res.data) {
        router.push('/profile?key=' + res.data.key);
      }
    }
  };

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
        default:
          break;
      }
      await getProfileKey();
      setIsLoading(false);
      setSelectedProvider(null);
      // router.push('/profile');
    } catch (error) {
      setIsLoading(false);
      setSelectedProvider(null);
      toast({
        title: 'Error',
        description: 'Failed to login',
        status: 'error',
        position: 'top',
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
      <Heading fontSize='2rem' color='white' fontWeight='extrabold'>
        Login
      </Heading>
      <Flex my='12' w='90%' alignItems='stretch'>
        <Center
          onClick={() => login('metaMask')}
          cursor='pointer'
          bgColor={'white'}
          color={'blue.800'}
          mx='1rem'
          w='10rem'
          h='11rem'
          rounded='3xl'
          py='1.5rem'
          flexDirection={'column'}
          fontSize='xl'
          shadow='xl'
          transition={'all 0.2s ease-in-out'}
          _hover={{
            bgColor: 'blue.800',
            color: 'white',
            transform: 'scale(1.2)',
            fontSize: '1.5rem',
            shadow: '3xl',
          }}
          _active={{
            transform: 'scale(0.9)',
          }}
        >
          <Image src={metamaskIcon.src} w='50px' />
          <Text fontWeight='bold' mt='2'>
            MetaMask
          </Text>
        </Center>
        <Spacer />
        <Center
          onClick={() => login('google')}
          cursor='pointer'
          bgColor={'white'}
          color={'blue.800'}
          flexDirection={'column'}
          mx='1rem'
          w='10rem'
          h='11rem'
          rounded='3xl'
          py='1.5rem'
          fontSize='xl'
          shadow='xl'
          transition={'all 0.2s ease-in-out'}
          _hover={{
            bgColor: 'blue.800',
            color: 'white',
            transform: 'scale(1.2)',
            fontSize: '1.5rem',
            shadow: '3xl',
          }}
          _active={{
            transform: 'scale(0.9)',
          }}
        >
          <Icon as={FaGoogle} boxSize='50px' />
          <Text fontWeight='bold' mt='2'>
            Google
          </Text>
        </Center>
        {/* <Button
          isLoading={selectedProvider === 'facebook'}
          loadingText='Facebook'
          onClick={() => login('facebook')}
          leftIcon={<FaFacebook />}
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
          _active={{
            transform: 'scale(0.9)',
          }}
        >
          Facebook
        </Button>
        <Button
          isLoading={selectedProvider === 'github'}
          loadingText='Github'
          onClick={() => login('github')}
          leftIcon={<FaGithub />}
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
          _active={{
            transform: 'scale(0.9)',
          }}
        >
          Github
        </Button> */}
      </Flex>
    </Center>
  );
}
