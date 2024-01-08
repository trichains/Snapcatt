import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';

// em vez de adicionar o componente Sidebar a cada página, eu adicionei apenas uma vez ao componente PageLayout e envolvi os filhos com ele. Dessa forma, podemos ter uma barra lateral em todas as páginas, exceto na AuthPage.

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* barra lateral á esquerda */}
      {pathname !== '/auth' ? (
        <Box w={{ md: '240px' }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* conteúdo da página á direita */}
      <Box flex={1} w={{ base: 'calc(100% - 70px)', md: 'calc(100% - 240px)' }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
