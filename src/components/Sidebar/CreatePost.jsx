import {
  Box,
  Button,
  CloseButton,
  Flex,
  Input,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure
} from '@chakra-ui/react';
import { CreatePostLogo } from '../../assets/constants';
import { MdImageSearch } from 'react-icons/md';
import { useRef, useState } from 'react';
import usePreviewImg from '../../hooks/usePreviewImg';
import useUserProfileStore from '../../store/userProfileStore';
import { firestore, storage } from '../../firebase/firebase';
import { addDoc, collection, doc } from 'firebase/firestore';
import { ref } from 'firebase/storage';
import usePostStore from '../../store/postStore';
import useAuthStore from '../../store/authStore';
import useShowToast from '../../hooks/useShowToast';

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [caption, setCaption] = useState('');
  const imageRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } =
    usePreviewImg(imageRef);

  return (
    <>
      <Flex
        gap={4}
        _hover={{ bg: 'whiteAlpha.200' }}
        borderRadius={6}
        cursor={'pointer'}
        p={2}
        onClick={onOpen}>
        <CreatePostLogo />
        <Box display={{ base: 'none', md: 'block' }}>Criar</Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent bg={'black'} border={'1px solid gray'}>
          <ModalHeader p={{ base: 2, md: 4 }}>Criar nova publicação</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={2}>
            <Textarea
              placeholder="Escreva uma legenda..."
              resize={'none'}
              maxLength={2000}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <Input
              type="file"
              hidden
              ref={imageRef}
              onChange={handleImageChange}
            />
            <Button
              leftIcon={<MdImageSearch size={25} />}
              onClick={() => imageRef.current.click()}
              mt={2}
              colorScheme={'blue'}
              cursor={'pointer'}>
              Selecionar imagem
            </Button>
            {selectedFile && (
              <Flex
                mt={4}
                w={'full'}
                position={'relative'}
                justifyContent={'center'}>
                <Image maxH={'sm'} src={selectedFile} alt="Imagem selecionada" />
                <CloseButton
                  onClick={() => setSelectedFile(null)}
                  position={'absolute'}
                  top={2}
                  right={2}
                />
              </Flex>
            )}
          </ModalBody>

          <ModalFooter>
            <Button mr={3}>Publicar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;

function useCreatePost() {
  const showToast = useShowToast();
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const createPost = usePostStore((state) => state.createPost);
  const addPost = useUserProfileStore((state) => state.addPost);
  const { pathname } = useLocation();

  const handleCreatePost = async (selectedFile, caption) => {
    if (!selectedFile)
      throw new Error('Por favor, selecione uma imagem para publicar');
    setIsLoading(true);
    const newPost = {
      caption: caption,
      likes: [],
      comments: [],
      createdAt: Date.now(),
      createdBy: authUser.uid
    };

    try {
      const postDocRef = await addDoc(collection(firestore, 'posts'), newPost);
      const userDocRef = doc(firestore, 'users', authUser.uid);
      const imageRef = ref(storage, `posts/${postDocRef.id}`);
    } catch (error) {
      showToast('Erro', error.message, 'error');
    } finally {
      setIsLoading(false);
    }
  };
}
