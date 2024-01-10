import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack
} from '@chakra-ui/react';
import useUserProfileStore from '../../store/userProfileStore';
import useAuthStore from '../../store/authStore';
import useLogout from '../../hooks/useLogout';
import { BiLogOut } from 'react-icons/bi';

const ProfileHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);

  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile.username;
  const visitingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile.username;

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
        <Avatar src={userProfile.profilePicURL} alt="Profile logo" />
      </AvatarGroup>

      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex
          gap={4}
          direction={{ base: 'column', sm: 'row' }}
          justifyContent={{ base: 'center', sm: 'flex-start' }}
          alignItems={'center'}
          w={'full'}>
          <Text fontSize={'lg'}>{userProfile.username}</Text>

          {visitingOwnProfileAndAuth && (
            <Flex
              gap={5}
              mb={2}
              alignItems={'center'}
              justifyContent={'center'}>
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
                <BiLogOut
                  style={{ position: 'absolute', left: 10 }}
                  size={20}
                />
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
          )}
          {visitingAnotherProfileAndAuth && (
            <Flex gap={5} alignItems={'center'} justifyContent={'center'}>
              <Button
                size={'sm'}
                colorScheme="yellow"
                _hover={{ bg: 'yellow.300' }}>
                Seguir
              </Button>
            </Flex>
          )}
        </Flex>

        <Flex alignItems={'center'} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              {userProfile.posts.length}
            </Text>
            postagens
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              {userProfile.followers.length}
            </Text>
            seguidores
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              {userProfile.following.length}
            </Text>
            seguindo
          </Text>
        </Flex>
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>
            {userProfile.fullName}
          </Text>
        </Flex>
        <Text fontSize={'sm'}>{userProfile.bio}</Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
