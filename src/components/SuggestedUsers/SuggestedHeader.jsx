import { Avatar, Button, Flex, Text } from '@chakra-ui/react';
import useLogout from '../../hooks/useLogout';
import useAuthStore from '../../store/authStore';
import { Link } from 'react-router-dom';

const SuggestedHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar size={'lg'} src={authUser.profilePicURL} />
        </Link>
        <Link to={`${authUser.username}`}>
          <Text fontSize={14} fontWeight={'bold'}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>
      <Button
        size={'sm'}
        bg={'transparent'}
        _hover={{ bg: 'transparent' }}
        fontSize={14}
        fontWeight={'medium'}
        onClick={handleLogout}
        isLoading={isLoggingOut}
        color={'blue.400'}
        cursor={'pointer'}>
        Sair
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
