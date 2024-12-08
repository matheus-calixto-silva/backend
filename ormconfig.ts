import { DataSourceOptions } from 'typeorm';
import { env } from './src/app/config/env';

const ormconfig: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: parseInt(env.mysql.port, 10),
  username: env.mysql.username,
  password: env.mysql.password,
  database: env.mysql.database,
  entities: ['src/app/models/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
  logging: false,
};

export default ormconfig;
