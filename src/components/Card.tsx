import {
  Box,
  Center,
  Input,
  Text,
  Button,
  ChakraProvider,
} from '@chakra-ui/react';
import { useState } from 'react';
import welcome from '../services/welcome';


const Card = () => {
  const [nome, setNome] = useState<any>();

  function handleClick(): void {
    setNome('');
    welcome(nome);
  }

  function handleChange(e: any): void {
    setNome(e.target.value);
  }
  return (
    
    <Box
      minH={'100vh'}
      backgroundColor={'rgb(30, 25, 44)'}
      padding={'1.5rem'}
      alignItems={'center'}
    >
      <Center>
        <Box
          backgroundColor={'#fff'}
          borderRadius={'25px'}
          padding={'1rem'}
          textAlign={'center'}
          maxW={'600px'}
          minHeight={'15rem'}
        >
          <Text fontSize={'4xl'}>Faça login</Text>
          <Input
            type={'email'}
            placeholder={'Digite seu Nome'}
            m={'1rem'}
            w={'80%'}
            value={nome}
            onChange={handleChange}
          />

          <Button
            onClick={handleClick}
            m={'0.975rem'}
            w={'15rem'}
            background={'rgb(57, 38, 117)'}
            textColor={'#fff'}
            borderRadius={'25px'}
            _hover={{ bg: 'rgb(84, 54, 181)' }}
          >
            Entrar
          </Button>
        </Box>
      </Center>
    </Box>
  );
};

export default Card;
