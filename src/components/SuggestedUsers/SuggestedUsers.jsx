import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers';

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  if (isLoading) return null;

  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      {suggestedUsers.length !== 0 && (
        <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
          <Text fontSize={14} fontWeight={'bold'} color={'gray.500'}>
            Sugestões para seguir
          </Text>
          <Text
            fontSize={14}
            fontWeight={'bold'}
            _hover={{ color: 'gray.400' }}
            cursor={'pointer'}>
            Ver tudo
          </Text>
        </Flex>
      )}

      {suggestedUsers.map((user) => (
        <SuggestedUser key={user.id} user={user} />
      ))}

      <Box fontSize={14} color={'gray.500'} mt={5} alignSelf={'start'}>
        © 2024 Desenvolvido por{' '}
        <Link
          href="https://github.com/trichains"
          target={'_blank'}
          color={'blue.500'}
          fontSize={14}>
          trichains
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
