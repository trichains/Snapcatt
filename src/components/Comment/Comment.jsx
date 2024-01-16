import { useState } from 'react';
import { Avatar, Flex, Text, Button } from '@chakra-ui/react';

const Comment = ({ comment }) => {
  return (
    <Flex maxW={{ base: '65vw', md: '20vw' }} gap={4}>
      {/* <Avatar src={profilePic} name={displayUsername} size={'sm'} /> */}
      <Flex w={'full'} direction={'column'}>
        <Flex alignItems={'center'} gap={2}>
          <Text fontWeight={'bold'} fontSize={14}>
            {/* {displayUsername} */}
          </Text>
          <Text fontSize={12} color={'gray'}>
            {/* {createdAt} */}
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
