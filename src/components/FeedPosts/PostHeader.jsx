import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      w={'full'}
      my={2}>
      <Flex align={'center'} gap={2}>
        <Avatar src={avatar} alt="Foto de Usuário" size={'sm'} />
        <Flex
          fontSize={{ base: '10px', md: '14px' }}
          fontWeight={'bold'}
          gap={2}>
          {username}
          <Box color={'gray.500'}>• 1h</Box>
        </Flex>
      </Flex>
      <Box cursor={'pointer'}>
        <Text
          fontSize={{ base: '10px', md: '14px' }}
          color={'blue.500'}
          fontWeight={'bold'}
          _hover={{ color: 'red.600' }}
          transition={'.2s ease-in-out'}>
          Deixar de seguir
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
