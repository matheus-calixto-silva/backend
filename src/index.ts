import express from 'express';
import 'reflect-metadata';

import { env } from './app/config/env';
import './database/connect';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(env.port, () =>
  console.log(`🔥 Servidor rodando em http://localhost:${env.port}`)
);
