import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack
} from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';

const ProfileHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();

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

          <Flex gap={5} mb={2} alignItems={'center'} justifyContent={'center'}>
            <Button
              size={'sm'}
              colorScheme="gray"
              variant={'outline'}
              cursor={'pointer'}
              _hover={{ bg: 'whiteAlpha.300' }}>
              Editar perfil
            </Button>
            <Flex
              onClick={handleLogout}
              display={{ base: 'flex', md: 'none' }}
              position={'relative'}
              alignItems={'center'}
              fontSize={'sm'}
              _hover={{ bg: 'red.600' }}
              borderRadius={6}>
              <BiLogOut style={{ position: 'absolute', left: 10 }} size={20} />
              <Button
                size={'sm'}
                pl={10}
                variant={'outline'}
                _hover={{ bg: 'transparent' }}
                isLoading={isLoggingOut}>
                Sair
              </Button>
            </Flex>
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
