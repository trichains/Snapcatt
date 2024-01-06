import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    navigate('/');
  };

  return (
    <>
      <Box
        border={'1px'}
        borderColor={'#222'}
        bg={'#000'}
        borderRadius={10}
        padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.svg" h={24} cursor={'pointer'} alt="Snapurr" />
          <Input
            placeholder="Email"
            fontSize={14}
            type="email"
            autoComplete="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder="Senha"
            fontSize={14}
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />

          {!isLogin ? (
            <Input
              placeholder="Confirmar Senha"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              fontSize={14}
              type="password"
            />
          ) : null}

          <Button
            w={'full'}
            colorScheme="blue"
            size={'sm'}
            fontSize={14}
            onClick={handleAuth}>
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </Button>

          {/* ------ OU ------*/}
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            my={4}
            gap={1}
            w={'full'}>
            <Box flex={2} h={'1px'} bg={'gray.400'} />
            <Text mx={1} color={'white'}>
              OU
            </Text>
            <Box flex={2} h={'1px'} bg={'gray.400'} />
          </Flex>
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            cursor={'pointer'}>
            <Image src="/google.svg" w={5} alt="Google logo" />
            <Text mx={2} color={'blue.300'}>
              Entrar com Google
            </Text>
          </Flex>
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
