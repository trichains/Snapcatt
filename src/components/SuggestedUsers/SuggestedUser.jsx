import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const SuggestedUser = ({ name, followers, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} name={name} size={'md'} />
        <VStack spacing={2} alignItems={'flex-start'}>
          <Box fontSize={14} fontWeight={'bold'}>
            {name}
          </Box>
          <Box fontSize={14} color={'gray.500'}>
            {followers} seguidores
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={14}
        bg={'transparent'}
        p={0}
        h={'max-content'}
        fontWeight={'medium'}
        color={'blue.400'}
        cursor={'pointer'}
        _hover={{ color: 'blue.500' }}
        onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? 'Seguindo' : 'Seguir'}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
