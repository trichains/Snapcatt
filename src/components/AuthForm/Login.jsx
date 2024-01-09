import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={'sm'}
        autoComplete="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        _placeholder={{ color: 'whiteAlpha.600' }}
      />
      <Input
        placeholder="Senha"
        fontSize={14}
        size={'sm'}
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        _placeholder={{ color: 'whiteAlpha.600' }}
      />
      <Button w={'full'} colorScheme="blue" size={'sm'} fontSize={14}>
        Entrar
      </Button>
    </>
  );
};

export default Login;
