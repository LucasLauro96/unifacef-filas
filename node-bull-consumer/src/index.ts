import { loadEnvs } from './tools/envs.tools';
const env = process.env.NODE_ENV || 'development';
loadEnvs(`${__dirname}/../envs/.env-${env}`);
import  './mysql';
import './queues';
import './server';

process.on('uncaughtException', (error: Error) => {
  console.error(`uncaughtException ${error.message}`);
});

process.on('unhandledRejection', (reason: any) => {
  console.error(`unhandledRejection ${reason}`);
});
