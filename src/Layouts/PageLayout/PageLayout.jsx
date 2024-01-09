import { auth } from '../../firebase/firebase';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

// em vez de adicionar o componente Sidebar a cada página, eu adicionei apenas uma vez ao componente PageLayout e envolvi os filhos com ele. Dessa forma, podemos ter uma barra lateral em todas as páginas, exceto na AuthPage.

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== '/auth' && user;
  const canRenderNavbar = !user && !loading && pathname !== '/auth';

  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;

  return (
    <Flex flexDir={canRenderNavbar ? 'column' : 'row'}>
      {/* barra lateral á esquerda */}
      {canRenderSidebar ? (
        <Box w={{ md: '240px' }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* Navbar */}
      {canRenderNavbar ? <Navbar /> : null}

      {/* conteúdo da página á direita */}
      <Box flex={1} mx={'auto'}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      h={'100vh'}>
      <Spinner size={'xl'} />
      <Box>Carregando...</Box>
    </Flex>
  );
};
