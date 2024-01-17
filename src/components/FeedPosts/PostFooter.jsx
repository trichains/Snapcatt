import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo
} from '../../assets/constants';
import usePostComment from '../../hooks/usePostComment';
import useAuthStore from '../../store/authStore';
import useLikePost from '../../hooks/useLikePost';

const PostFooter = ({ post, username, isProfilePage }) => {
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState('');
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const { handleLikePost, isLiked, likes } = useLikePost(post);

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment('');
  };

  return (
    <Box mb={{ base: 5, md: 10 }} mt={'auto'}>
      <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} mt={4}>
        <Box onClick={handleLikePost} cursor={'pointer'} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box
          cursor={'pointer'}
          fontSize={18}
          onClick={() => commentRef.current.focus()}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={'sm'}>
        {likes} Curtidas
      </Text>
      {!isProfilePage && (
        <>
          <Text fontSize={'sm'} fontWeight={700}>
            {username}{' '}
            <Text as={'span'} fontWeight={400}>
              💙🩵
            </Text>
          </Text>
          <Text fontSize={'sm'} color={'gray.500'}>
            Veja todos os comentários
          </Text>
        </>
      )}

      {authUser && (
        <Flex
          alignItems={'center'}
          gap={2}
          justifyContent={'space-between'}
          w={'full'}>
          <InputGroup>
            <Input
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              ref={commentRef}
              variant={'flushed'}
              placeholder="Adicione um comentário..."
              _placeholder={{ color: 'whiteAlpha.500' }}
              fontSize={14}
              pr={{ base: 16, md: 20 }}
            />
            <InputRightElement width={{ base: 14, md: 'auto' }}>
              <Button
                onClick={handleSubmitComment}
                isLoading={isCommenting}
                // disabled={comment === ''}
                fontSize={14}
                color={'blue.500'}
                fontWeight={600}
                cursor={'pointer'}
                _hover={{ color: 'blue.600' }}
                bg={'transparent'}>
                Publicar
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
