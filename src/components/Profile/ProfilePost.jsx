import {
  Button,
  Divider,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import Comment from '../Comment/Comment';
import PostFooter from '../FeedPosts/PostFooter';
import useUserProfileStore from '../../store/userProfileStore';
import useAuthStore from '../../store/authStore';
import usePostStore from '../../store/postStore';
import useShowToast from '../../hooks/useShowToast';
import { AiFillHeart } from 'react-icons/ai';
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { FaComment } from 'react-icons/fa';
import { firestore, storage } from '../../firebase/firebase';
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';
import Caption from '../Comment/Caption';

const ProfilePost = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const deletePost = usePostStore((state) => state.deletePost);
  const decrementPostsCount = useUserProfileStore((state) => state.deletePost);

  const handleDeletePost = async () => {
    if (!window.confirm('Tem certeza que deseja excluir esta publicação?')) return;
    if (isDeleting) return;

    try {
      const imageRef = ref(storage, `posts/${post.id}`);
      await deleteObject(imageRef);
      const userRef = doc(firestore, 'users', authUser.uid);
      await deleteDoc(doc(firestore, 'posts', post.id));

      await updateDoc(userRef, {
        posts: arrayRemove(post.id)
      });

      deletePost(post.id);
      decrementPostsCount(post.id);
      showToast('Sucesso', 'Publicação excluída com sucesso', 'success');
    } catch (error) {
      showToast('Erro', error.message, 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <GridItem
        cursor={'pointer'}
        borderRadius={4}
        overflow={'hidden'}
        border={'1px solid'}
        borderColor={'whiteAlpha.300'}
        position={'relative'}
        aspectRatio={1 / 1}
        onClick={onOpen}>
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={'absolute'}
          top={0}
          bottom={0}
          left={0}
          right={0}
          bg={'blackAlpha.700'}
          transition={'all 0.3s ease'}
          zIndex={1}
          justifyContent={'center'}>
          <Flex alignItems={'center'} justifyContent={'center'} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={'bold'} ml={2}>
                {post.likes.length}
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={'bold'} ml={2}>
                {post.comments.length}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image src={post.imageURL} alt="Postagens do perfil" w={'100%'} h={'100%'} style={{ objectFit: 'cover' }} />
      </GridItem>

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{ base: '3xl', md: '5xl' }}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={'#000310'} pb={5}>
            <Flex
              maxH={{ base: '80vh', md: '70vh' }}
              minH={'50vh'}
              direction={{ base: 'column', md: 'row' }}
              gap={{ base: 0, md: 4 }}
              w={{ base: 'full', sm: '70%', md: 'full' }}
              mx={'auto'}>
              <Flex
                borderRadius={10}
                border={'1px solid #121212'}
                justifyContent={'center'}
                inset={1}
                alignItems={'center'}
                overflowY={'auto'}
                flex={{ base: 1, md: 1.5 }}>
                <Image src={post.imageURL} alt="Postagens do perfil" />
              </Flex>
              {/* Seção de comentários */}
              <Flex mt={{ base: 2, md: 0 }} flex={1} flexDir={'column'} px={{ base: 0, md: 10 }} display={'flex'}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                  <Flex alignItems={'center'} gap={4}>
                    {/* Legenda */}
                    {post.caption && <Caption post={post} />}
                  </Flex>

                  {authUser?.uid === userProfile.uid && (
                    <Button
                      onClick={handleDeletePost}
                      isLoading={isDeleting}
                      size={'sm'}
                      bg={'transparent'}
                      _hover={{ bg: 'whiteAlpha.300', color: 'red.600' }}
                      borderRadius={4}
                      p={1}>
                      <MdDelete size={20} cursor={'pointer'}></MdDelete>
                    </Button>
                  )}
                </Flex>
                <Divider my={{ base: 2, md: 4 }} bg={'gray.500'} />
                <VStack w={'full'} alignItems={'start'} maxH={{ base: '150px', md: '350px' }} overflowY={'auto'}>
                  {/* Comentários */}
                  {post.comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                  ))}
                </VStack>
                <Divider my={{ base: 0, md: 4 }} bg={'gray.580'} />
                <PostFooter isProfilePage={true} post={post} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
