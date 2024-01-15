import { Avatar, Button, Flex, VStack } from '@chakra-ui/react';
import useFollowUser from '../../hooks/useFollowUser';
import useAuthStore from '../../store/authStore';

const SuggestedUser = ({ user, setUser }) => {
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
  const authUser = useAuthStore((state) => state.user);

  const onFollowUser = async () => {
    await handleFollowUser();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((follower) => follower.uid !== authUser.uid)
        : [...user.followers, authUser]
    });
  };

  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={user.profilePicURL} size={'md'} />
        <VStack spacing={2} alignItems={'flex-start'}>
          <Flex fontSize={14} fontWeight={'bold'}>
            {user.fullName}
          </Flex>
          <Flex fontSize={14} color={'gray.500'}>
            {user.followers.length} seguidores
          </Flex>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
          fontSize={14}
          bg={'transparent'}
          p={0}
          h={'max-content'}
          fontWeight={'medium'}
          color={'blue.400'}
          cursor={'pointer'}
          _hover={{ color: 'blue.500' }}
          onClick={onFollowUser}
          isLoading={isUpdating}>
          {isFollowing ? 'Seguindo' : 'Seguir'}
        </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
