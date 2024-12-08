import express from 'express';
import 'reflect-metadata';

import router from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () =>
  console.log('🔥 Servidor rodando em http://localhost:3000')
);
