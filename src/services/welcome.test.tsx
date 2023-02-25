import welcome from './welcome';
describe('Boas vindas', () => {
  const mockAlert = jest.fn();
  welcome('Vinícius');
  window.alert = mockAlert;
  it('deve exibir um alert com boas vindas', () => {
    expect(mockAlert).toHaveBeenCalled();
  });
});
