import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack
} from '@chakra-ui/react';

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
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
          <Text fontSize={{ base: 'sm', md: 'lg' }}>trichains</Text>

          <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button
              size={{ base: 'xs', md: 'sm' }}
              bg={'white'}
              color={'black'}
              cursor={'pointer'}
              _hover={{ bg: 'whiteAlpha.800' }}>
              Editar perfil
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems={'center'} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              4
            </Text>
            Publicações
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              162
            </Text>
            Seguidores
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              200
            </Text>
            Seguindo
          </Text>
        </Flex>
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>
            trichains
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
