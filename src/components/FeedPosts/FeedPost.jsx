import {
  Box,
  Flex,
  Image,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import useGetUserProfileById from '../../hooks/useGetUserProfileById';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';

const FeedPost = ({ post }) => {
  const { userProfile } = useGetUserProfileById(post.createdBy);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2} borderRadius={4} overflow={'hidden'}>
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
            <ModalBody bg={'black'} pb={5}>
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
                  alignItems={{ base: 'center', md: 'normal' }}
                  overflowY={'auto'}
                  flex={{ base: 1, md: 1.5 }}>
                  <Image src={post.imageURL} alt="Postagens do perfil" />
                </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </>
  );
};

export default FeedPost;
