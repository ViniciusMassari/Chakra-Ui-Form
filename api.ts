const conta = {
  email: 'vini@email.com',
  password: '123456',
  name: 'Vinícius',
  balance: 2000.0,
  id: '1',
};

const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});

export default api;
