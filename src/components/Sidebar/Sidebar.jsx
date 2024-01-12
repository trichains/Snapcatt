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
        <Flex direction={{ base: 'row', md: 'column' }} gap={5} p={2}>
          <SidebarItems />
        </Flex>

        {/* Sair */}
        <Flex
          direction={'column'}
          display={{ base: 'none', md: 'flex' }}
          p="2"
          mt={{ md: 'auto' }}>
          <Button
            justifyContent={'flex-start'}
            onClick={handleLogout}
            leftIcon={<BiLogOut size={25} />}
            display={{ base: 'none', md: 'flex' }}
            gap={2}
            p={2}
            variant={'ghost'}
            _hover={{ bg: 'whiteAlpha.200' }}
            cursor={'pointer'}
            isLoading={isLoggingOut}>
            Sair
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
