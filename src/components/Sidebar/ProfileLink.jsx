import { Avatar, Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

const ProfileLink = () => {
  const authUser = useAuthStore((state) => state.user);

  return (
    <Link
      display={'flex'}
      to={`/${authUser?.username}`}
      as={RouterLink}
      alignItems={'center'}
      gap={3}
      _hover={{ bg: 'whiteAlpha.200' }}
      borderRadius={6}
      p={2}>
      <Avatar
        ml={{ base: 0, md: -1 }}
        size={'sm'}
        src={authUser?.profilePicURL || ''}
      />
      <Box display={{ base: 'none', md: 'block' }}>Perfil</Box>
    </Link>
  );
};

export default ProfileLink;
