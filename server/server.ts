import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import root from './src/routes/root';

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', root)

app.listen(port, () => {
    console.log(`Сервер работает по порту: http://localhost:${port}`);
});