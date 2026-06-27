import 'dotenv/config'

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import root from './src/routes/root';
import { prisma } from './src/models/prisma';

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', root)

// const server = app.listen(port, () => {
//     console.log(`Сервер работает по порту: http://localhost:${port}`);
// });

// async function gracefulShutdown(){
//     console.log('Остановка сервера ...');

//     server.close(async () => {
//         await prisma.$disconnect();
//         console.log('Соединение с Prisma закрыто');
//         process.exit(0);
//     })
// }

// process.on('SIGTERM', gracefulShutdown);
// process.on('SIGINT', gracefulShutdown);