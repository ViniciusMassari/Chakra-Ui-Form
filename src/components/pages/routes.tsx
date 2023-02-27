import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppContext } from '../AppContext';
import Conta from './Conta';
import Home from './Home';

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/conta/:id' element={isLoggedIn ? <Conta /> : <Home />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default MainRoutes;
