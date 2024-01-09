import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

import Login from './Login';
import Register from './Register';
import GoogleAuth from './GoogleAuth';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box
        border={'1px'}
        borderColor={'#222'}
        bg={'#000'}
        borderRadius={10}
        padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.svg" h={24} cursor={'pointer'} alt="Snapcatt" />

          {isLogin ? <Login /> : <Register />}

          {/* ------ OU ------*/}
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            my={4}
            gap={1}
            w={'full'}>
            <Box flex={2} h={'1px'} bg={'gray.400'} />
            <Text mx={1}>OU</Text>
            <Box flex={2} h={'1px'} bg={'gray.400'} />
          </Flex>
          <GoogleAuth />
        </VStack>
      </Box>
      <Box
        border={'1px'}
        borderRadius={10}
        padding={5}
        borderColor={'#222'}
        bg={'#000'}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mx={2} fontSize={14}>
            {isLogin ? 'Não possui conta?' : 'Já possui conta?'}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={'blue.300'}
            cursor={'pointer'}>
            {isLogin ? 'Cadastre-se!' : 'Entre!'}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
