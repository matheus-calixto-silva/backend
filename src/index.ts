import express from 'express';
import 'reflect-metadata';

import { env } from './app/config/env.ts';
import './database/connect.ts';
import router from './routes.ts';

const app = express();

app.use(express.json());
app.use(router);

app.listen(env.port, () =>
  console.log(`🔥 Servidor rodando em http://localhost:${env.port}`)
);
