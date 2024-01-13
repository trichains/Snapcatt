import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Link,
  Text,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import useUserProfileStore from '../../store/userProfileStore';
import useAuthStore from '../../store/authStore';
import useLogout from '../../hooks/useLogout';
import { Link as RouterLink } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import EditProfile from './EditProfile';
import useFollowUser from '../../hooks/useFollowUser';

const ProfileHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(
    userProfile?.uid
  );

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
        <Avatar src={userProfile.profilePicURL} alt="Foto do Usuário" />
      </AvatarGroup>

      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex
          gap={2}
          direction={{ base: 'column', sm: 'row' }}
          justifyContent={{ base: 'center', sm: 'flex-start' }}
          alignItems={'center'}
          w={'full'}>
          <Text fontSize={'lg'}>{userProfile.username}</Text>

          {visitingOwnProfileAndAuth && (
            <Flex gap={5} alignItems={'center'} justifyContent={'center'}>
              <Button
                size={'sm'}
                colorScheme="gray"
                variant={'outline'}
                cursor={'pointer'}
                onClick={onOpen}>
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
                <Link to={'/auth'} as={RouterLink}>
                  <Button
                    size={'sm'}
                    pl={10}
                    variant={'outline'}
                    _hover={{ bg: 'transparent' }}
                    isLoading={isLoggingOut}>
                    Sair
                  </Button>
                </Link>
              </Flex>
            </Flex>
          )}
          {visitingAnotherProfileAndAuth && (
            <Flex gap={5} alignItems={'center'} justifyContent={'center'}>
              <Button
                size={'sm'}
                colorScheme="gray"
                variant={isFollowing ? 'solid' : 'outline'}
                onClick={handleFollowUser}
                isLoading={isUpdating}>
                {isFollowing ? 'Seguindo' : 'Seguir'}
              </Button>
            </Flex>
          )}
        </Flex>

        <Flex mt={2} alignItems={'center'} gap={{ base: 2, sm: 4 }}>
          <Flex
            alignItems={'center'}
            flexDir={{ base: 'column', sm: 'row' }}
            fontSize={'sm'}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              {userProfile.posts.length}
            </Text>
            postagens
          </Flex>
          <Flex
            alignItems={'center'}
            flexDir={{ base: 'column', sm: 'row' }}
            fontSize={'sm'}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              {userProfile.followers.length}
            </Text>
            seguidores
          </Flex>
          <Flex
            alignItems={'center'}
            flexDir={{ base: 'column', sm: 'row' }}
            fontSize={'sm'}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              {userProfile.following.length}
            </Text>
            seguindo
          </Flex>
        </Flex>
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>
            {userProfile.fullName}
          </Text>
        </Flex>
        <Text fontSize={'sm'}>{userProfile.bio}</Text>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default ProfileHeader;
