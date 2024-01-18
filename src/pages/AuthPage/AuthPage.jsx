import { Container, Flex, VStack, Box, Image } from '@chakra-ui/react';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => {
  return (
    <Flex minH={{ base: '95vh', md: '100vh' }} justifyContent={'center'} alignItems={'center'} px={1}>
      <Container maxW={'container.md'} padding={0}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
          {/* Lado esquerdo */}
          <Box display={{ base: 'none', md: 'block' }}>
            <Image src="/auth.webp" h={'100%'} w={'100%'} alt="Gatinhos no celular" />
          </Box>

          {/* Lado direito */}
          <VStack spacing={4} align={'stretch'}>
            <AuthForm />
            <Box fontSize={14} textAlign={'center'}>
              Desenvolvido por trichains
            </Box>
            <Flex gap={5} justifyContent={'center'}>
              <Image src="/github.svg" h={30} alt="GitHub logo" />
              <Image src="/portfolio.svg" h={30} alt="Portfolio logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
