import { Avatar, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/timeAgo';
import useUserProfileStore from '../../store/userProfileStore';

const Caption = ({ post }) => {
  const userProfile = useUserProfileStore((state) => state.userProfile);
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
            {timeAgo(post.createdAt)}
          </Text>
        </Flex>
        <Text whiteSpace={'pre-wrap'} fontSize={14}>
          {post.caption}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Caption;
