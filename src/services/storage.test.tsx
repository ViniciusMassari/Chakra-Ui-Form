import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from './storage';

const diobank = {
  login: false,
};
describe('storage', () => {
  const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
  const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');

  it('Deve retornar o objeto localStorage com a chave diobank', () => {
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWwith('diobank');
  });

  it('deve criar o objeto no localStorage', () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      'diobank',
      JSON.stringify(diobank)
    );
  });

  it('deve alterar o valor do objeto no localStorage', () => {
    changeLocalStorage(diobank);
    expect(mockSetItem).toHaveBeenCalledWith(
      'diobank',
      JSON.stringify(diobank)
    );
  });
});
