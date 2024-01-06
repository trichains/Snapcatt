import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo
} from '../../assets/constants';

const PostFooter = ({ username }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };
  return (
    <Box mb={10}>
      <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={'pointer'} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={'sm'}>
        {likes} Curtidas
      </Text>
      <Text fontSize={'sm'} fontWeight={700}>
        {username}{' '}
        <Text as={'span'} fontWeight={400}>
          ❤️❤️
        </Text>
      </Text>
      <Text fontSize={'sm'} color={'gray.500'}>
        Veja todos os comentários
      </Text>

      <Flex
        alignItems={'center'}
        gap={2}
        justifyContent={'space-between'}
        w={'full'}>
        <InputGroup>
          <Input
            variant={'flushed'}
            placeholder="Adicione um comentário..."
            fontSize={{ base: '12px', md: '14px' }}
            pr={{ base: 12, md: 'auto' }}
          />
          <InputRightElement width={{ base: 12, md: 'auto' }}>
            <Button
              fontSize={{ base: '12px', md: '14px' }}
              color={'blue.500'}
              fontWeight={600}
              cursor={'pointer'}
              _hover={{ color: 'white' }}
              bg={'transparent'}>
              Publicar
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
