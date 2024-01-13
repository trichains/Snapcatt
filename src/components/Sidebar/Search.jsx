import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { SearchLogo } from '../../assets/constants';
import useSearchUser from '../../hooks/useSearchUser';
import { useRef } from 'react';
import SuggestedUser from '../SuggestedUsers/SuggestedUser';

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, isLoading, searchUser, setUser } = useSearchUser();
  const searchRef = useRef(null);

  const handleSearchUser = (e) => {
    e.preventDefault();
    searchUser(searchRef.current.value);
  };
  return (
    <>
      <Flex
        onClick={onOpen}
        alignItems={'center'}
        cursor={'pointer'}
        _hover={{ bg: 'whiteAlpha.100' }}
        borderRadius={6}
        gap={4}
        p={{ base: 1, md: 2 }}>
        <SearchLogo />
        <Box display={{ base: 'none', md: 'block' }}>Pesquisar</Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent
          bg={'#000310'}
          border={'1px solid gray'}
          borderRadius={6}
          maxW={400}>
          <ModalHeader>Pesquisar</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSearchUser}>
              <FormControl>
                <FormLabel>Nome de Usuário</FormLabel>
                <Input type="text" placeholder="trichains" ref={searchRef} />
              </FormControl>

              <Flex w={'full'} justifyContent={'flex-end'}>
                <Button
                  type="submit"
                  ml={'auto'}
                  size={'sm'}
                  my={4}
                  isLoading={isLoading}>
                  Pesquisar
                </Button>
              </Flex>
            </form>
            {user && <SuggestedUser user={user} setUser={setUser} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;
