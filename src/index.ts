import express from 'express';
import 'reflect-metadata';
import './database/connect.ts';

import { env } from './app/config/env.ts';
import { loginRouter } from './app/controllers/loginController.ts';
import { servicesRouter } from './app/controllers/serviceController.ts';
import { usersRouter } from './app/controllers/userController.ts';

const app = express();

app.use(express.json());
app.use(loginRouter);
app.use(usersRouter);
app.use(servicesRouter);

app.listen(env.port, () =>
  console.log(`🔥 Servidor rodando em http://localhost:${env.port}`)
);
