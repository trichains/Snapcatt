import { Avatar, Box, Button, Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useFollowUser from '../../hooks/useFollowUser';

const PostHeader = ({ post, creatorProfile }) => {
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(post.createdBy);
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={2}>
      <Flex align={'center'} gap={2}>
        {creatorProfile ? (
          <Link to={`/${creatorProfile.username}`}>
            <Avatar src={creatorProfile.profilePicURL} alt="Foto de Usuário" size={'sm'} />
          </Link>
        ) : (
          <SkeletonCircle size="10" />
        )}

        <Flex fontSize={14} fontWeight={'bold'} gap={2}>
          {creatorProfile ? (
            <Link to={`/${creatorProfile.username}`}>{creatorProfile.username}</Link>
          ) : (
            <Skeleton w={100} h={10} />
          )}

          <Box color={'gray.500'}>• 1h</Box>
        </Flex>
      </Flex>
      <Box cursor={'pointer'}>
        <Button
          size={'xs'}
          bg={'transparent'}
          fontSize={14}
          color={'blue.400'}
          fontWeight={'bold'}
          _hover={{ color: 'red.600' }}
          transition={'.2s ease-in-out'}
          onClick={handleFollowUser}
          isLoading={isUpdating}>
          {isFollowing ? 'Seguindo' : 'Seguir'}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
