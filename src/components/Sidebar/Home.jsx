import { Box, Link } from '@chakra-ui/react';
import { AiFillHome } from 'react-icons/ai';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Link
      display={'flex'}
      to={'/'}
      as={RouterLink}
      alignItems={'center'}
      _hover={{ bg: 'whiteAlpha.200' }}
      borderRadius={6}
      gap={4}
      p={{ base: 1, md: 2 }}>
      <AiFillHome size={25} />
      <Box display={{ base: 'none', md: 'block' }}>Início</Box>
    </Link>
  );
};

export default Home;
