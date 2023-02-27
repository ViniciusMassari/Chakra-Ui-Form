import { createContext, useState } from 'react';
import { getAllLocalStorage, createLocalStorage } from '../services/storage';

interface IAppContext {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const user = 'Vinícius';

  const storage = getAllLocalStorage();

  if (storage) {
    const { login } = JSON.parse(storage);
    setIsLoggedIn(login);
  }

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
