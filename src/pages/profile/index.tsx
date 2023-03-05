import { NextPage } from 'next';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './Profile.module.css';
import { auth } from '../../config/firebase';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AddIcon } from '@chakra-ui/icons';
import userIcon from '../../assets/userIcon.svg';
import {
  Center,
  Heading,
  Image,
  Text,
  Button,
  VStack,
  Link,
  Input,
  Textarea,
  Flex,
  HStack,
  Box,
  AspectRatio,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { getIcon } from '@/utils/getIcon';
import { LinkInfo, Profile } from '@/utils/type';

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const [name, setName] = useState('Eason');
  const [bio, setBio] = useState('Full Stack Developer');
  const [bgImage, setBgImage] = useState('');
  const [avatar, setAvatar] = useState('');
  const [fontFamily, setFontFamily] = useState('');
  const [links, setLinks] = useState<LinkInfo[]>([
    { label: '', url: '' },
    { label: '', url: '' },
    { label: '', url: '' },
    { label: '', url: '' },
    { label: '', url: '' },
    { label: '', url: '' },
    { label: '', url: '' },
  ]);

  const profile: Profile = useMemo(() => {
    return {
      name,
      bio,
      bgImage,
      avatar,
      fontFamily,
      links,
    };
  }, [name, bio, bgImage, avatar, fontFamily, links]);

  useEffect(() => {
    if (!auth.currentUser) {
      router.push('/login');
    }
  }, [auth.currentUser]);

  const handleUploadAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      getBase64(e.target.files[0]);
    }
  };

  const getBase64 = (file: File) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAvatar(reader.result as string);
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  };

  console.log('avatar: ', avatar);

  return (
    <Flex
      className={styles.container}
      flexDirection='row'
      w='100%'
      h='100%'
      bg='gray.500'
      alignItems='stretch'
    >
      <Center
        bg='gray.600'
        h='100%'
        w='100%'
        py='2'
        flexDirection='column'
        justifyContent='start'
      >
        <Heading as='h1' size='xl' color='#f5f5f5' my='4'>
          Preview
        </Heading>
        <Center
          flexDirection='column'
          bg='gray.500'
          my='2'
          py='4'
          borderRadius='3xl'
        >
          <Image
            borderRadius='full'
            // border={'2px solid #f5f5f5'}
            boxSize='120px'
            src={avatar ? avatar : userIcon}
            alt='Avatar'
          />
          <Heading size='md' color='#f5f5f5'>
            {name ? name : 'Name'}
          </Heading>
          <Text
            w='80'
            textAlign='center'
            lineHeight='1.2'
            color='#f5f5f5'
            fontWeight={500}
          >
            {bio ? bio : 'Bio'}
          </Text>
          <VStack direction='column' spacing={2} align='center' m='6' w='100%'>
            {links.map((link, index) => {
              return (
                <Link
                  w='100%'
                  textAlign='center'
                  key={index}
                  href={link.url ? link.url : '#'}
                  isExternal
                >
                  <Button
                    leftIcon={<FontAwesomeIcon icon={getIcon(link.url)} />}
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
      </Center>
      <Center
        bg='gray.500'
        h='100%'
        w='100%'
        flexDirection='column'
        justifyContent='start'
      >
        <VStack spacing={2} align='left' w='80%' mt='4'>
          <HStack my='6'>
            <VStack align='center' spacing={4} mr='4'>
              <AspectRatio width='120px' ratio={1} mx='2'>
                <Box
                  borderColor='gray.300'
                  color='gray.300'
                  borderStyle='dashed'
                  borderWidth='2px'
                  rounded='full'
                  role='group'
                  transition='all 150ms ease-in-out'
                  _hover={{
                    borderColor: 'gray.100',
                    shadow: 'md',
                  }}
                  as={motion.div}
                  whileHover='hover'
                >
                  <Box position='relative' height='100%' width='100%'>
                    <Center
                      position='absolute'
                      top='0'
                      left='0'
                      height='100%'
                      width='100%'
                      display='flex'
                      flexDirection='column'
                    >
                      <AddIcon boxSize='6' />
                      <Text fontSize='3xs'>Drop or click</Text>
                    </Center>
                    <Input
                      type='file'
                      height='100%'
                      width='100%'
                      position='absolute'
                      top='0'
                      left='0'
                      opacity='0'
                      aria-hidden='true'
                      accept='image/*'
                      cursor='pointer'
                      onChange={handleUploadAvatar}
                    />
                  </Box>
                </Box>
              </AspectRatio>
              <Heading fontSize='xl' color='#f5f5f5'>
                Set Avatar
              </Heading>
            </VStack>
            <VStack w='100%' spacing={2} align='left'>
              <Heading fontSize='xl' color='#f5f5f5'>
                Set Name
              </Heading>
              <Input
                isInvalid={name === ''}
                color='#f5f5f5'
                borderRadius='lg'
                border='1px'
                size='sm'
                w='150px'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Heading fontSize='xl' color='#f5f5f5'>
                Set Bio
              </Heading>
              <Textarea
                isInvalid={bio === ''}
                w='100%'
                borderRadius='lg'
                border='1px'
                size='sm'
                color='#f5f5f5'
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </VStack>
          </HStack>
          <Heading fontSize='xl' color='#f5f5f5'>
            Set Link
          </Heading>
          {links.map((link, index) => (
            <Flex key={index} direction='row' align='center'>
              <Text color='#f5f5f5' fontWeight={500}>
                Label
              </Text>
              <Input
                mx='2'
                color='#f5f5f5'
                borderRadius='lg'
                border='1px'
                size='sm'
                w='150px'
                // value={'Name'}
                onChange={(e) =>
                  setLinks((prev) => {
                    const newLinks = [...prev];
                    newLinks[index].label = e.target.value;
                    return newLinks;
                  })
                }
              />
              <Text ml='2' color='#f5f5f5' fontWeight={500}>
                Link
              </Text>
              <Input
                ml='2'
                color='#f5f5f5'
                borderRadius='lg'
                border='1px'
                size='sm'
                w='100%'
                // value={'Name'}
                onChange={(e) =>
                  setLinks((prev) => {
                    const newLinks = [...prev];
                    newLinks[index].url = e.target.value;
                    return newLinks;
                  })
                }
              />
            </Flex>
          ))}
        </VStack>
        <Button my='8' w='80%'>
          Submit
        </Button>
      </Center>
      {/* <p>{auth.currentUser ? auth.currentUser.email : 'Not logged in'}</p>
        <p>
          {auth.currentUser ? auth.currentUser.displayName : 'Not logged in'}
        </p>
        <p>{auth.currentUser ? auth.currentUser.photoURL : 'Not logged in'}</p> */}
    </Flex>
  );
};

export default ProfilePage;
