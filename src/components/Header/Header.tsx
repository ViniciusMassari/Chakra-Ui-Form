import './Header.css';
import { Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <div className='header'>
      <Text textColor={'white'} textAlign={'center'} fontSize={'5xl'}>
        Dio Bank
      </Text>
    </div>
  );
};

export default Header;
