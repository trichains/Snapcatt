import { Box, Flex } from '@chakra-ui/react';
import { ReelsLogo } from '../../assets/constants';

const Catios = () => {
  return (
    <Flex
      cursor={'pointer'}
      alignItems={'center'}
      gap={4}
      _hover={{ bg: 'whiteAlpha.200' }}
      borderRadius={6}
      p={{ base: 1, md: 2 }}>
      <ReelsLogo />
      <Box display={{ base: 'none', md: 'block' }}>Catios</Box>
    </Flex>
  );
};

export default Catios;
