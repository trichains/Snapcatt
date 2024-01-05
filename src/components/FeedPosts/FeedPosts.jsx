import { Container } from '@chakra-ui/react';
import FeedPost from './FeedPost';

const FeedPosts = () => {
  return (
    <Container maxW={'container.sm'} py={10} px={2}>
      <FeedPost img="/img1.jpg" username="trichains" avatar="/profilepic.jpg" />
      <FeedPost img="/img2.jpg" username="fulano" avatar="/img2.jpg" />
      <FeedPost img="/img3.jpg" username="ciclano" avatar="/img3.jpg" />
      <FeedPost img="/img4.jpg" username="beltrano" avatar="/img4.jpg" />
    </Container>
  );
};

export default FeedPosts;
