import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Layout from '../Layout';

const ContaInfo = () => {
  return (
    <>
      <Text color={'white'} fontSize='3xl'>
        Informações da conta
      </Text>
      <Link to='/conta/1'>
        <Text color={'white'}>Conta</Text>
      </Link>
    </>
  );
};

export default ContaInfo;
