import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import useRegisterWithEmailAndPassword from '../../hooks/useRegisterWithEmailAndPassword';
import firebaseErrors from '../../utils/firebaseErrors';

const Register = () => {
  const MAX_USERNAME_LENGTH = 20;
  const MAX_FULLNAME_LENGTH = 30;
  const MAX_EMAIL_LENGTH = 40;

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, register } = useRegisterWithEmailAndPassword();

  const handleInputChange = (field, value) => {
    // Limita o comprimento da entrada com base no campo
    let valorTruncado = value;
    switch (field) {
      case 'username':
        valorTruncado = value.slice(0, MAX_USERNAME_LENGTH);
        break;
      case 'fullName':
        valorTruncado = value.slice(0, MAX_FULLNAME_LENGTH);
        break;
      case 'email':
        valorTruncado = value.slice(0, MAX_EMAIL_LENGTH);
        break;
      default:
        break;
    }

    setInputs({ ...inputs, [field]: valorTruncado });
  };

  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={'sm'}
        autoComplete="email"
        value={inputs.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        _placeholder={{ color: 'whiteAlpha.600' }}
      />
      <Input
        placeholder="Nome de Usuário"
        fontSize={14}
        type="text"
        size={'sm'}
        value={inputs.username}
        onChange={(e) => handleInputChange('username', e.target.value)}
        _placeholder={{ color: 'whiteAlpha.600' }}
      />
      <Input
        placeholder="Nome Completo"
        fontSize={14}
        type="text"
        size={'sm'}
        value={inputs.fullName}
        onChange={(e) => handleInputChange('fullName', e.target.value)}
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
        <InputRightElement h={'full'} cursor={'pointer'} onClick={() => setShowPassword(!showPassword)}>
          <Button variant={'ghost'} size={'sm'} onClick={() => setShowPassword(!showPassword)}>
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
        bg={'whiteAlpha.900'}
        color={'black'}
        _hover={{ bg: 'whiteAlpha.800' }}
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
