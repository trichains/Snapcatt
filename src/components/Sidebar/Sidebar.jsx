import { Box, Button, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { SnapcattLogo } from '../../assets/constants';

import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';
import SidebarItems from './SidebarItems';

const Sidebar = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  return (
    <Box
      bg={'black'}
      height={{ base: 'auto', md: '100vh' }}
      borderTop={{ base: '1px solid', md: 'none' }}
      borderRight={{ base: 'none', md: '1px solid' }}
      borderColor={{ base: 'whiteAlpha.400', md: 'whiteAlpha.300' }}
      w={'full'}
      px={{ base: 0, md: 4 }}
      py={{ base: 0, md: 8 }}
      position={{ base: 'fixed', md: 'sticky' }}
      top={{ md: 0 }}
      bottom={0}
      left={0}
      zIndex={{ base: 99 }}>
      <Flex
        justify={{ base: 'center', md: 'flex-start' }}
        direction={{ base: 'row', md: 'column' }}
        gap={{ base: 2, md: 10 }}
        h={{ base: 'auto', md: 'full' }}>
        <Link
          to={'/'}
          as={RouterLink}
          pl={2}
          display={{ base: 'none', md: 'block' }}
          cursor="pointer">
          <SnapcattLogo />
        </Link>
        <Flex
          direction={{ base: 'row', md: 'column' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
          gap={5}
          borderRadius={6}
          p={2}
          justifyContent={{ base: 'center', md: 'flex-start' }}>
          <SidebarItems />
        </Flex>

        {/* Sair */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          onClick={handleLogout}
          ml={{ base: 2 }}
          alignItems={'center'}
          gap={4}
          _hover={{ bg: 'whiteAlpha.100' }}
          w={{ md: 'full' }}
          borderRadius={6}
          p={{ base: 1, md: 2 }}
          mt={{ md: 'auto' }}
          justifyContent={{ base: 'center', md: 'flex-start' }}>
          <BiLogOut size={25} />
          <Button
            display={{ base: 'none', md: 'block' }}
            variant={'ghost'}
            _hover={{ bg: 'transparent' }}
            isLoading={isLoggingOut}>
            Sair
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
