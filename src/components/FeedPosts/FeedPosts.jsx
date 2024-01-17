import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react';
import FeedPost from './FeedPost';
import useGetFeedPosts from '../../hooks/useGetFeedPosts';
import SuggestedUsers from '../SuggestedUsers/SuggestedUsers';

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();

  // Check if the device is a mobile device
  const isMobile = window.innerWidth <= 991; // You can adjust the breakpoint as needed

  return (
    <Container maxW={'container.sm'} py={5} px={2}>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={'flex-start'}>
                <Skeleton height="10px" w={'200px'} />
                <Skeleton height="10px" w={'200px'} />
              </VStack>
            </Flex>
            <Skeleton w={'full'}>
              <Box h={'400px'}>conteudo</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}

      {/* Renderização condicional com base no tipo de dispositivo */}
      {isMobile && !isLoading && posts.length === 0 && (
        <>
          <Text fontSize={'md'} color={'gray.500'}>
            Siga algum usuário para ver as publicações de seus seguidores.
          </Text>
          <SuggestedUsers />{' '}
        </>
      )}
      {/* Mensagem para desktop */}
      {!isMobile && !isLoading && posts.length === 0 && (
        <>
          <Text fontSize={'md'} color={'gray.500'}>
            Siga algum usuário para ver as publicações de seus seguidores.
          </Text>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
