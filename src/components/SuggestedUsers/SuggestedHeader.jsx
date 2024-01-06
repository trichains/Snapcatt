import { Avatar, Text, Link, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar name="Trichains" size={'lg'} src="/profilepic.jpg" />
        <Text fontSize={14} fontWeight={'bold'}>
          aaaaa
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={'/auth'}
        fontSize={14}
        fontWeight={'medium'}
        color={'blue.400'}
        cursor={'pointer'}
        style={{ textDecoration: 'none' }}
        _hover={{ color: 'white' }}>
        Sair
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
