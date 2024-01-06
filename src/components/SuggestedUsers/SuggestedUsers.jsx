import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
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

      <SuggestedUser name="fulano" followers={1850} avatar="/img2.jpg" />
      <SuggestedUser name="ciclano" followers={1232} avatar="/img3.jpg" />
      <SuggestedUser name="beltrano" followers={752} avatar="/img4.jpg" />

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
