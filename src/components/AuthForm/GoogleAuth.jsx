import { Flex, Image, Text } from '@chakra-ui/react';

const GoogleAuth = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
      <Image src="/google.svg" w={5} alt="Google logo" />
      <Text mx={2} color={'blue.300'}>
        Entrar com Google
      </Text>
    </Flex>
  );
};

export default GoogleAuth;
