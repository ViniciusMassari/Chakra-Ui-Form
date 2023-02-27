import { Box, Button, Input, Text } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import Card from '../Card';
import login from '../../services/login';
import { useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { changeLocalStorage } from '../../services/storage';

const Home = () => {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const { setIsLoggedIn } = useContext(AppContext);

  const navigate = useNavigate();

  const validateUser = async () => {
    const loggedIn = await login(email);
    if (!loggedIn) {
      alert('Email inválido');
    }
    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate('/conta/1');
  };
  return (
    <Card>
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
          placeholder={'Digite seu Email'}
          m={'1rem'}
          w={'80%'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type={'password'}
          placeholder={'Digite sua senha'}
          m={'1rem'}
          w={'80%'}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <Button
          onClick={validateUser}
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
    </Card>
  );
};

export default Home;
