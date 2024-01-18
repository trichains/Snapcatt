import { Alert, AlertIcon, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

import firebaseErrors from '../../utils/firebaseErrors';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const { loading, error, login } = useLogin();
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
      {error && (
        <Alert status="error" fontSize={14} p={2} borderRadius={5}>
          <AlertIcon fontSize={18} />
          {firebaseErrors[error.code]}
        </Alert>
      )}
      <Button w={'full'} colorScheme="gray" size={'sm'} fontSize={14} isLoading={loading} onClick={() => login(inputs)}>
        Entrar
      </Button>
    </>
  );
};

export default Login;
