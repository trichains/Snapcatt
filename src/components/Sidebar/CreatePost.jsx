import {
  Box,
  Button,
  CloseButton,
  Flex,
  Image,
  Input,
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
import { LuImagePlus } from 'react-icons/lu';
import { useRef, useState } from 'react';
import useAuthStore from '../../store/authStore';
import usePostStore from '../../store/postStore';
import usePreviewImg from '../../hooks/usePreviewImg';
import useShowToast from '../../hooks/useShowToast';
import useUserProfileStore from '../../store/userProfileStore';
import { firestore, storage } from '../../firebase/firebase';
import { useLocation } from 'react-router-dom';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [caption, setCaption] = useState('');
  const imageRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
  const { handleCreatePost, isLoading } = useCreatePost();
  const showToast = useShowToast();

  const handlePostCreation = async () => {
    try {
      await handleCreatePost(selectedFile, caption);
      onClose();
      setCaption('');
      setSelectedFile(null);
    } catch (error) {
      showToast('Erro', error.message, 'error');
    }
  };

  return (
    <>
      <Flex
        _hover={{ bg: 'whiteAlpha.200' }}
        borderRadius={6}
        cursor={'pointer'}
        alignItems={'center'}
        gap={4}
        p={{ base: 1, md: 2 }}
        onClick={onOpen}>
        <CreatePostLogo />
        <Box display={{ base: 'none', md: 'block' }}>Criar</Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent bg={'black'} border={'1px solid #121212'}>
          <Flex
            direction={'column'}
            alignItems={{ base: 'center', md: 'start' }}>
            <ModalHeader p={{ base: 2, md: 4 }}>
              Criar nova publicação
            </ModalHeader>
          </Flex>
          <ModalCloseButton />
          <ModalBody p={4}>
            <Textarea
              placeholder="Escreva uma legenda..."
              resize={'none'}
              maxLength={2000}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <Input
              w={'full'}
              type="file"
              hidden
              ref={imageRef}
              onChange={handleImageChange}
            />
            <Flex justifyContent={{ base: 'center', md: 'start' }}>
              <Button
                p={2}
                leftIcon={<LuImagePlus size={24} />}
                onClick={() => imageRef.current.click()}
                mt={2}
                variant={'outline'}
                colorScheme={'gray'}
                cursor={'pointer'}>
                Selecionar imagem
              </Button>
            </Flex>
            {selectedFile && (
              <Flex
                mt={4}
                w={'full'}
                position={'relative'}
                justifyContent={'center'}>
                <Image
                  maxH={{ base: '30vh', md: '50vh' }}
                  src={selectedFile}
                  alt="Imagem selecionada"
                />
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
            <Button
              onClick={handlePostCreation}
              isLoading={isLoading}
              colorScheme="blue"
              mr={3}>
              Publicar
            </Button>
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
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const { pathname } = useLocation();

  const handleCreatePost = async (selectedFile, caption) => {
    if (isLoading) return;
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

      await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
      await uploadString(imageRef, selectedFile, 'data_url');
      const downloadURL = await getDownloadURL(imageRef);

      await updateDoc(postDocRef, { imageURL: downloadURL });

      newPost.imageURL = downloadURL;

      if (userProfile.uid === authUser.uid)
        createPost({ ...newPost, id: postDocRef.id });

      if (pathname !== '/' && userProfile.uid === authUser.uid)
        addPost({ ...newPost, id: postDocRef.id });

      showToast('Sucesso', 'Publicação criada com sucesso', 'success');
    } catch (error) {
      showToast('Erro', error.message, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleCreatePost,
    isLoading
  };
}
