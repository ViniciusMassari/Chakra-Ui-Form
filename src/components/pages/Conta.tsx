import { Center, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../api';
import { AppContext } from '../AppContext';
import CardInfo from '../CardInfo/CardInfo';

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const actualDate = new Date();

const Conta = () => {
  const { isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const userData: any | UserData = await api;
      setData(userData);
    };
    getData();
  }, []);

  !isLoggedIn && navigate('/');

  if (data && id !== data.id) {
    navigate('/');
  }

  return (
    <Center gap={'20px'}>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {data === null || data === undefined ? (
          <Center>
            <Spinner size={'xl'} color={'red.500'} thickness={'4px'} />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo(a) ${data.name}`}
              content={`${actualDate.getDay()}/${actualDate.getMonth()}/${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}`}
            />
            <CardInfo mainContent={`Saldo`} content={`R$ ${data.balance}`} />
          </>
        )}

        {/* <CardInfo  /> */}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
