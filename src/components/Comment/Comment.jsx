import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react';
import useGetUserProfileById from '../../hooks/useGetUserProfileById';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/timeAgo';

const Comment = ({ comment }) => {
  const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy);
  if (isLoading) return <CommentSkeleton />;

  return (
    <Flex maxW={{ base: '65vw', md: '20vw' }} gap={4}>
      <Link to={`/${userProfile.username}`}>
        <Avatar src={userProfile.profilePicURL} size={'sm'} />
      </Link>
      <Flex w={'full'} direction={'column'}>
        <Flex alignItems={'center'} gap={2}>
          <Link to={`/${userProfile.username}`}>
            <Text fontWeight={'bold'} fontSize={14}>
              {userProfile.username}
            </Text>
          </Link>
          <Text fontSize={12} color={'gray'}>
            {timeAgo(comment.createdAt)}
          </Text>
        </Flex>
        <Text whiteSpace={'pre-wrap'} fontSize={14}>
          {comment.comment}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;

const CommentSkeleton = () => {
  <Flex gap={4} w={'full'} alignItems={'center'}>
    <SkeletonCircle h={10} w={10} />
    <Flex gap={1} flexDir={'column'}>
      <Skeleton height={2} w={100} />
      <Skeleton height={2} w={50} />
    </Flex>
  </Flex>;
};
