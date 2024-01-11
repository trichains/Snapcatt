import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import useRegisterWithEmailAndPassword from '../../hooks/useRegisterWithEmailAndPassword';
import firebaseErrors from '../../../firebaseErrors';

const Register = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, register } = useRegisterWithEmailAndPassword();
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
        placeholder="Nome de Usuário"
        fontSize={14}
        type="text"
        size={'sm'}
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        _placeholder={{ color: 'whiteAlpha.600' }}
      />
      <Input
        placeholder="Nome Completo"
        fontSize={14}
        type="text"
        size={'sm'}
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        _placeholder={{ color: 'whiteAlpha.600' }}
      />
      <InputGroup>
        <Input
          placeholder="Senha"
          fontSize={14}
          type={showPassword ? 'text' : 'password'}
          value={inputs.password}
          size={'sm'}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          _placeholder={{ color: 'whiteAlpha.600' }}
        />
        <InputRightElement
          h={'full'}
          cursor={'pointer'}
          onClick={() => setShowPassword(!showPassword)}>
          <Button
            variant={'ghost'}
            size={'sm'}
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <Alert status="error" fontSize={14} p={3} borderRadius={4}>
          <AlertIcon fontSize={18} />
          {firebaseErrors[error.code]}
        </Alert>
      )}

      <Button
        w={'full'}
        colorScheme="blue"
        size={'sm'}
        fontSize={14}
        isLoading={loading}
        onClick={() => register(inputs)}>
        Cadastrar
      </Button>
    </>
  );
};

export default Register;
