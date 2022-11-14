import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './Context/AuthContext'
import PostContextProvider from './Context/PostContext'
import { ChakraProvider } from '@chakra-ui/react'

import { ColorModeScript } from '@chakra-ui/react'
import theme from './components/Theme'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ChakraProvider> 

    <AuthContextProvider> 
      <PostContextProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      

    <App />
    </PostContextProvider>
    </AuthContextProvider>
    </ChakraProvider> 

  </React.StrictMode>
);


reportWebVitals();