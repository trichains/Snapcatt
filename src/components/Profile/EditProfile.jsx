import {
  Avatar,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack
} from '@chakra-ui/react';
import { useState } from 'react';
import useAuthStore from '../../store/authStore';

const EditProfile = ({ isOpen, onClose }) => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    bio: ''
  });

  const authUser = useAuthStore((state) => state.user);

  const handleEditProfile = () => {
    console.log(inputs);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={'black'}
          boxShadow={'xl'}
          border={'1px solid gray'}
          mx={3}>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            {/* Container Flex */}
            <Flex bg={'black'}>
              <Stack
                spacing={{ base: 2, sm: 4 }}
                w={'full'}
                maxW={'md'}
                bg={'black'}
                p={{ base: 4, md: 4 }}
                alignItems={'center'}
                my={0}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                  Editar Perfil
                </Heading>
                <FormControl>
                  <Stack
                    direction={['column', 'row']}
                    spacing={{ base: 2, sm: 6 }}>
                    <Center>
                      <Avatar size="xl" src={''} border={'2px solid white '} />
                    </Center>
                    <Center w="full">
                      <Button w="full">Alterar imagem</Button>
                    </Center>
                  </Stack>
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={'sm'}>Nome</FormLabel>
                  <Input
                    placeholder={'Gatinho da Silva'}
                    size={'sm'}
                    type={'text'}
                    value={inputs.fullName || authUser.fullName}
                    onChange={(e) =>
                      setInputs({ ...inputs, fullName: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={'sm'}>Nome de Usuário</FormLabel>
                  <Input
                    placeholder={'Exemplo: gatinho_silva'}
                    size={'sm'}
                    type={'text'}
                    value={inputs.username || authUser.username}
                    onChange={(e) =>
                      setInputs({ ...inputs, username: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={'sm'}>Bio</FormLabel>
                  <Input
                    placeholder={'Sou um gatinho cinza de 3 anos.'}
                    size={'sm'}
                    type={'text'}
                    value={inputs.bio || authUser.bio}
                    onChange={(e) =>
                      setInputs({ ...inputs, bio: e.target.value })
                    }
                  />
                </FormControl>

                <Stack mt={2} spacing={6} direction="row">
                  <Button
                    bg={'red.400'}
                    color={'white'}
                    w="full"
                    size="sm"
                    _hover={{ bg: 'red.500' }}
                    onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    size="sm"
                    w="full"
                    _hover={{ bg: 'blue.500' }}
                    onClick={handleEditProfile}>
                    Salvar
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfile;
