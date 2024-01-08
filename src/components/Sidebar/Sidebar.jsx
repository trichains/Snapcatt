import {
  Avatar,
  Box,
  Flex,
  Link,
  Tooltip,
  useMediaQuery
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import {
  SnapcattLogo,
  SearchLogo,
  NotificationsLogo,
  ReelsLogo,
  CreatePostLogo
} from '../../assets/constants';

const SidebarItem = ({ icon, text, link, showOnMobile = true }) => {
  const [isMobile] = useMediaQuery('(max-width: 48em)');
  return (
    <Tooltip
      hasArrow
      label={text}
      placement={'top'}
      ml={{ base: 0, md: 1 }}
      openDelay={500}
      display={{ base: 'block', md: 'none' }}>
      <Link
        as={link ? RouterLink : 'div'}
        to={link}
        display={{
          base: isMobile && !showOnMobile ? 'none' : 'flex',
          md: 'flex'
        }}
        alignItems={'center'}
        gap={{ base: 2, md: 4 }}
        _hover={{ bg: 'whiteAlpha.400' }}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: 'full' }}
        h={{ base: 10 }}
        justifyContent={{ base: 'center', md: 'flex-start' }}>
        {icon}
        <Box
          display={{
            base: isMobile && !showOnMobile ? 'block' : 'none',
            md: 'block'
          }}>
          {text}
        </Box>
      </Link>
    </Tooltip>
  );
};

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: 'Inicio',
      link: '/'
    },
    {
      icon: <SearchLogo />,
      text: 'Pesquisar'
    },
    {
      icon: <NotificationsLogo />,
      text: 'Notificações',
      showOnMobile: false
    },
    {
      icon: <ReelsLogo />,
      text: 'Catios'
    },
    {
      icon: <CreatePostLogo />,
      text: 'Criar Post'
    },
    {
      icon: <Avatar size={'sm'} name="trichains" src="/profilepic.jpg" />,
      text: 'Perfil',
      link: '/trichains'
    }
  ];

  return (
    <Box
      bg={'black'}
      height={{ md: '100vh' }}
      w={{ base: '100%' }}
      borderTop={{ base: '1px solid', md: 'none' }}
      borderRight={{ base: 'none', md: '1px solid' }}
      borderColor={{ base: 'whiteAlpha.300', md: 'whiteAlpha.300' }}
      px={{ base: 4, md: 4 }}
      py={{ base: 2, md: 8 }}
      position={{ base: 'fixed', md: 'sticky' }}
      top={{ md: 0 }}
      bottom={0}
      left={0}
      zIndex={{ base: 99 }}>
      <Flex
        justify={{ base: 'center' }}
        alignItems={{ base: 'center' }}
        direction={{ base: 'row', md: 'column' }}
        gap={{ base: 2, md: 10 }}
        h={{ md: 'full' }}>
        <Link
          to={'/'}
          as={RouterLink}
          pl={2}
          display={{ base: 'none', md: 'block' }}
          cursor={'pointer'}>
          <SnapcattLogo />
        </Link>
        <Flex
          direction={{ base: 'row', md: 'column' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
          gap={5}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: 'full' }}
          justifyContent={{ base: 'center', md: 'flex-start' }}>
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} {...item} />
          ))}
        </Flex>
        <Tooltip
          hasArrow
          label={'Sair'}
          placement={'right'}
          ml={1}
          openDelay={500}
          display={{ base: 'block', md: 'none' }}>
          <Link
            ml={{ base: 2 }}
            display={{ base: 'none', md: 'flex' }}
            to={'/auth'}
            as={RouterLink}
            alignItems={'center'}
            gap={4}
            _hover={{ bg: 'whiteAlpha.400' }}
            w={{ md: 'full' }}
            borderRadius={6}
            p={{ base: 1, md: 2 }}
            mt={{ md: 'auto' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}>
            <BiLogOut size={25} />
            <Box display={{ base: 'none', md: 'block' }}>Sair</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
