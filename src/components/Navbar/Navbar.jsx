import { Container, Flex, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import NotificationsMobile from '../Sidebar/NotificationsMobile';
import CreatePostMobile from '../Sidebar/CreatePostMobile';

const Navbar = () => {
  return (
    <Container
      maxW={'container.md'}
      bg={'#000310'}
      display={{ base: 'block', md: 'none' }}
      justifyContent={'center'}
      position={'fixed'}
      borderBottom={'1px solid'}
      borderColor={'#222'}
      zIndex={99}>
      <Flex p={2} alignItems={'center'} justifyContent={'space-between'}>
        <Link to={'/'} as={RouterLink}>
          <Image src="/logo.svg" alt="Snapcatt" h={8} cursor={'pointer'} />
        </Link>
        <Flex gap={4}>
          <CreatePostMobile />
          <NotificationsMobile />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
