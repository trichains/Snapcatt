import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Link,
  Text,
  VStack
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={5}
      direction={{ base: 'column', sm: 'row' }}>
      <AvatarGroup
        size={{ base: 'xl', md: '2xl' }}
        justifySelf={'center'}
        alignSelf={'flex-start'}
        mx={'auto'}>
        <Avatar name="trichains" src="/profilepic.jpg" alt="Profile logo" />
      </AvatarGroup>
      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex
          gap={4}
          direction={{ base: 'column', sm: 'row' }}
          justifyContent={{ base: 'center', sm: 'flex-start' }}
          alignItems={'center'}
          w={'full'}>
          <Text fontSize={'lg'}>trichains</Text>

          <Flex gap={5} alignItems={'center'} justifyContent={'center'}>
            <Button
              size={{ base: 'xs', md: 'sm' }}
              bg={'white'}
              color={'black'}
              cursor={'pointer'}
              _hover={{ bg: 'whiteAlpha.800' }}>
              Editar perfil
            </Button>
            <Link
              alignItems={'center'}
              fontSize={'sm'}
              justifyContent={'center'}
              display={{ base: 'flex', md: 'none' }}
              to={'/auth'}
              as={RouterLink}
              gap={4}
              _hover={{ bg: 'whiteAlpha.400' }}
              borderRadius={6}
              p={'1'}>
              <BiLogOut size={20} />
              <Box display={'block'}>Sair</Box>
            </Link>
          </Flex>
        </Flex>

        <Flex alignItems={'center'} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              4
            </Text>
            publicações
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              162
            </Text>
            seguidores
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              200
            </Text>
            seguindo
          </Text>
        </Flex>
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>
            Cristhian Almeida
          </Text>
        </Flex>
        <Text fontSize={'sm'}>
          Apaixonado por programação, sempre transformando ideias em Realidade
          Digital.
        </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
