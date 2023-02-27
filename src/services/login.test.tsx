import { useNavigate } from 'react-router-dom';
import {} from 'jest';
import login from './login';

const mockSetIsLoggedIn = jest.fn();
const mockNavigate = jest.fn();

// jest.mock('react', () => {
//   return {
//     ...jest.requireActual('react'),
//     useContext: () => ({
//       setIsLoggedIn: mockSetIsLoggedIn,
//     }),
//   };
// });

// jest.mock('react-router-dom', () => {
//   return {
//     ...(jest.requireActual('react-router-dom') as any),
//     useNavigate: () => mockNavigate,
//   };
// });

describe('Boas vindas', () => {
  const email = 'vinicius@email.com';

  login(email);
  const mockEmail = 'vini@email.com';

  it('deve exibir um alert com boas vindas caso o email seja válido', async () => {
    const response = await login('vinicius@email.com');
    expect(response).toBeTruthy();
  });

  it(' deve exibir um erro caso o email seja inválido', async () => {
    const response = await login('vinicius@email.com');
    expect(response).toBeFalsy();
  });
});
