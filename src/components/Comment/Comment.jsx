import { useState } from 'react';
import { Avatar, Flex, Text, Button } from '@chakra-ui/react';

const Comment = ({ createdAt, username, profilePic, text, characterLimit }) => {
  const [showFullComment, setShowFullComment] = useState(false);

  const displayText = showFullComment ? text : text.slice(0, characterLimit);

  const handleToggleComment = () => {
    setShowFullComment(!showFullComment);
  };

  return (
    <Flex maxW={{ base: '65vw', md: '20vw' }} gap={4}>
      <Avatar src={profilePic} name={username} size={'sm'} />
      <Flex w={'full'} direction={'column'}>
        <Flex alignItems={'center'} gap={2}>
          <Text fontWeight={'bold'} fontSize={14}>
            {username}
          </Text>
          <Text fontSize={12} color={'gray'}>
            {createdAt}
          </Text>
        </Flex>
        <Text whiteSpace={'pre-wrap'} fontSize={14}>
          {displayText}
        </Text>
        {text.length > characterLimit && (
          <Button
            onClick={handleToggleComment}
            variant="link"
            fontSize={12}
            color={'blue.500'}
            mt={1}>
            {showFullComment ? 'Ver menos' : 'Ver mais'}
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Comment;
