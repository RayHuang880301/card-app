import { getIcon } from '@/utils/getIcon';
import { Profile } from '@/utils/type';
import userIcon from '../../assets/userIcon.svg';
import {
  Center,
  Heading,
  VStack,
  Button,
  Link,
  Image,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';

Show.getLayout = function getLayout(page: React.ReactElement) {
  return <>{page}</>;
};
export default function Show() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>({
    name: 'Name',
    bio: 'Bio',
    avatar: '',
    links: [
      {
        label: 'Link 1',
        url: 'https://google.com',
      },
      {
        label: 'Link 2',
        url: 'https://google.com',
      },
      {
        label: 'Link 3',
        url: 'https://google.com',
      },
      {
        label: 'Link 1',
        url: 'https://google.com',
      },
      {
        label: 'Link 2',
        url: 'https://google.com',
      },
      {
        label: 'Link 3',
        url: 'https://google.com',
      },
    ],
    bgImage: '',
    fontFamily: 'sans-serif',
  });
  return (
    <Flex
      flexDirection='column'
      minH={'100vh'}
      w='100%'
      bg='gray.600'
      justifyContent='space-between'
      alignItems='center'
      pt='8'
      pb='4'
    >
      <Center h='100%' w='100%' flexDirection='column' justifyContent='start'>
        <Image
          borderRadius='full'
          boxSize='8rem'
          src={profile?.avatar ? profile.avatar : userIcon.src}
          alt='Avatar'
          m='2'
        />
        <Heading size='lg' color='#f5f5f5'>
          {profile?.name ? profile.name : 'Name'}
        </Heading>
        <Text
          w='80'
          fontSize='18px'
          textAlign='center'
          lineHeight='1.2'
          color='#f5f5f5'
          fontWeight={500}
        >
          {profile?.bio ? profile.bio : 'Bio'}
        </Text>
        <VStack direction='column' spacing={3} align='center' m='6' w='100%'>
          {profile?.links.map((link, index) => {
            return (
              <Link
                w='100%'
                textAlign='center'
                key={index}
                href={link.url ? link.url : '#'}
                isExternal
              >
                <Button
                  leftIcon={<Icon as={getIcon(link.url)} />}
                  w='85%'
                  maxW='400px'
                  fontWeight='600'
                  borderRadius='lg'
                  border='2px'
                  color='#f5f5f5'
                  variant='outline'
                  transition={'all .2s ease-in-out'}
                  _hover={{
                    bg: '#f5f5f5',
                    borderColor: 'gray.500',
                    color: 'gray.800',
                  }}
                  id='https://www.linkedin.com/in/easonc13'
                >
                  {link.label ? link.label : 'Link'}
                </Button>
              </Link>
            );
          })}
        </VStack>
      </Center>
      <Text color='#f5f5f5' fontSize='xs'>
        Made by ❤️ InTag
      </Text>
    </Flex>
  );
}
