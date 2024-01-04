import { Container, Flex, VStack, Box, Image } from '@chakra-ui/react';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => {
  return (
    <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'} px={4}>
      <Container maxW={'container.md'} padding={0}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
          {/* Lado esquerdo */}
          <Box display={{ base: 'none', md: 'block' }}>
            <Image src="/auth.webp" h={650} alt="Gatinhos no celular" />
          </Box>
          
          {/* Lado direito */}
          <VStack spacing={4} align={'stretch'}>
          <Box textAlign={'center'}>TESTA AI MOOOOOOOO</Box>
            <AuthForm />
            <Box textAlign={'center'}>Desenvolvido por trichains</Box>
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
