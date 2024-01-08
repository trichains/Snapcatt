import {
  Avatar,
  Box,
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
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Comment from '../Comment/Comment';
import PostFooter from '../FeedPosts/PostFooter';

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                7
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={'bold'} ml={2}>
                3
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt="Postagens do perfil"
          w={'100%'}
          h={'100%'}
          style={{ objectFit: 'cover' }}
        />
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: '3xl', md: '5xl' }}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={'black'} pb={5}>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              gap={{ base: 0, md: 4 }}
              w={{ base: 'full', sm: '70%', md: 'full' }}
              mx={'auto'}>
              <Box
                borderRadius={4}
                overflow={'hidden'}
                border={'1px solid'}
                borderColor={'whiteAlpha.300'}
                flex={{ base: 1, md: 1.5 }}>
                <Image src={img} alt="Postagens do perfil" />
              </Box>
              {/* Seção de comentarios */}
              <Flex
                flex={1}
                flexDir={'column'}
                px={{ base: 0, md: 10 }}
                mt={{ base: 2, md: 0 }}
                display={'flex'}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                  <Flex alignItems={'center'} gap={4}>
                    <Avatar
                      src={'/profilepic.jpg'}
                      size={'sm'}
                      name="trichains"
                    />
                    <Text fontWeight={'bold'} fontSize={14}>
                      trichains
                    </Text>
                  </Flex>

                  <Box
                    _hover={{ bg: 'whiteAlpha.300', color: 'red.600' }}
                    borderRadius={4}
                    p={1}>
                    <MdDelete size={20} cursor={'pointer'}></MdDelete>
                  </Box>
                </Flex>
                <Divider my={{ base: 2, md: 4 }} bg={'gray.500'} />
                <VStack
                  gap={4}
                  w={'full'}
                  alignItems={'flex-start'}
                  maxH={{ base: '25vh', md: '350px' }}
                  overflowY={'auto'}>
                  <Comment
                    createdAt={'12h atrás'}
                    username="anabanana"
                    profilePic="/img1.jpg"
                    text={'gato fei kkkkkkkkkk'}
                  />
                  <Comment
                    createdAt={'3h atrás'}
                    username="blabla"
                    profilePic="/img2.jpg"
                    text={'quero bolo'}
                  />
                  <Comment
                    createdAt={'1d atrás'}
                    username="gato"
                    profilePic="/img3.jpg"
                    text={'sou lindo'}
                  />
                  <Comment
                    createdAt={'1d atrás'}
                    username="gato"
                    profilePic="/img3.jpg"
                    text={
                      'adsasdiasdijadsijdsjiads sjidjasjiasjiadsj idasaadsasddasasdasdsdjidasiadjsjiadsajisdijsdjisdijadsijdsijadjisjiadsiasd'
                    }
                  />
                  <Comment
                    createdAt={'1d atrás'}
                    username="gato"
                    profilePic="/img3.jpg"
                    text={'sou lindo'}
                  />
                </VStack>
                <Divider my={{ base: 0, md: 4 }} bg={'gray.580'} />
                <PostFooter isProfilePage={true} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
