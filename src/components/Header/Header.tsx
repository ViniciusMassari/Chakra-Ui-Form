import './Header.css';
import { Button, Flex, Spacer, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../../services/storage';

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Flex>
      <Text textColor={'white'} textAlign={'center'} fontSize={'5xl'}>
        Dio Bank
      </Text>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button onClick={logout}>Sair</Button>
        </>
      )}
    </Flex>
  );
};

export default Header;
