import { Box, Flex } from '@chakra-ui/react';
import { NotificationsLogo } from '../../assets/constants';

const Notifications = () => {
  return (
    <Flex
      cursor={'pointer'}
      alignItems={'center'}
      gap={4}
      _hover={{ bg: 'whiteAlpha.200' }}
      borderRadius={6}
      p={2}
      w={'full'}>
      <NotificationsLogo />
      <Box display={{ base: 'none', md: 'block' }}>Notificações</Box>
    </Flex>
  );
};

export default Notifications;
