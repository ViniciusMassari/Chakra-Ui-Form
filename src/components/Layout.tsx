import Header from './Header/Header';
import Footer from './Footer';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Box minH={'90vh'} backgroundColor={'rgb(30, 25, 44)'} padding={'1.5rem'}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
