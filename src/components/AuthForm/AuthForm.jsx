import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import './AuthForm.css';

import Login from './Login';
import Register from './Register';
import GoogleAuth from './GoogleAuth';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box bg={'#000'} borderRadius={10} overflow={'hidden'} w={380} h={420} position={'relative'} className="box">
        <Box className='borderLine' />
        <Box inset={1} position={'absolute'} zIndex={2} bg={'#000310'} borderRadius={10} padding={4}>
          <VStack spacing={4}>
            <Image src="/logo.svg" h={24} cursor={'pointer'} alt="Snapcatt" />
            {isLogin ? <Login /> : <Register />}
            {/* ------ OU ------*/}
            <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
              <Box flex={2} h={'1px'} bg={'gray.400'} />
              <Text mx={1}>OU</Text>
              <Box flex={2} h={'1px'} bg={'gray.400'} />
            </Flex>
            <GoogleAuth prefix={isLogin ? 'Entrar' : 'Cadastrar'} />
          </VStack>
        </Box>
      </Box>
      <Box border={'1px solid'} borderRadius={10} padding={5} borderColor={'#121212'} bg={'#000310'}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mx={2} fontSize={14}>
            {isLogin ? 'Não possui conta?' : 'Já possui conta?'}
          </Box>
          <Box onClick={() => setIsLogin(!isLogin)} color={'blue.300'} cursor={'pointer'}>
            {isLogin ? 'Cadastre-se!' : 'Entre!'}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
