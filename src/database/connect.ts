import { createConnection } from 'typeorm';

createConnection().then(() =>
  console.log('Conexão bem sucedida com o banco de dados 🏦🎲')
);
