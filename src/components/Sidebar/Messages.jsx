import { Box, Flex } from '@chakra-ui/react';
import { MessagesLogo } from '../../assets/constants';

const Messages = () => {
  return (
    <Flex
      cursor={'pointer'}
      alignItems={'center'}
      gap={4}
      _hover={{ bg: 'whiteAlpha.200' }}
      borderRadius={6}
      p={{ base: 1, md: 2 }}>
      <MessagesLogo />
      <Box display={{ base: 'none', md: 'block' }}>Mensagens</Box>
    </Flex>
  );
};

export default Messages;
