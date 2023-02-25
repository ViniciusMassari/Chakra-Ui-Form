import './App.css';
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import welcome from './services/welcome';
import Card from './components/Card';
import Header from './components/Header/Header';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Card />
    </ChakraProvider>
  );
}

export default App;
