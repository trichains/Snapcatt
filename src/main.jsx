import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { BrowserRouter } from 'react-router-dom';

const globalStyles = {
  global: (props) => ({
    body: {
      bg: mode('white', '#000310')(props),
      color: mode('gray.800', 'whiteAlpha.900')(props)
    }
  })
};

const darkConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

// Tema padrão
const theme = extendTheme({ config: darkConfig, styles: globalStyles });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
