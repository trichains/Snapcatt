import { Avatar, Box, Flex, Link, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  SnapcattLogo,
  SearchLogo,
  NotificationsLogo,
  CreatePostLogo
} from '../../assets/constants';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';

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
    // Remover a entrada para notificações em dispositivos móveis
    {
      icon: <NotificationsLogo />,
      text: 'Notificações',
      hideOnMobile: true // Adiciona essa propriedade para identificar que deve ser oculto em dispositivos móveis
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
          gap={{ base: 4, md: 5 }}
          w={{ md: 'full' }}>
          {sidebarItems.map(
            (item, index) =>
              !item.hideOnMobile && ( // Adiciona essa condição para não renderizar em dispositivos móveis
                <Tooltip
                  key={index}
                  hasArrow
                  label={item.text}
                  placement={{ base: 'top', md: 'right' }}
                  ml={{ md: 1 }}
                  openDelay={500}
                  display={{ base: 'block', md: 'none' }}>
                  <Link
                    display={'flex'}
                    to={item.link || null}
                    as={RouterLink}
                    alignItems={'center'}
                    gap={{ base: 2, md: 4 }}
                    _hover={{ bg: 'whiteAlpha.400' }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: 'full' }}
                    h={{ base: 10 }}
                    justifyContent={{ base: 'center', md: 'flex-start' }}>
                    {item.icon}
                    <Box display={{ base: 'none', md: 'block' }}>
                      {item.text}
                    </Box>
                  </Link>
                </Tooltip>
              )
          )}
        </Flex>
        <Tooltip
          hasArrow
          label={'Sair'}
          placement={{ base: 'top', md: 'right' }}
          ml={1}
          openDelay={500}
          display={{ base: 'block', md: 'none' }}>
          <Link
            ml={{ base: 2 }}
            display={'flex'}
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
