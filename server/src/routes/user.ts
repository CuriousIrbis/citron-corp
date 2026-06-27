import express from 'express'
import type {Request, Response} from 'express'
import { prisma } from '../models/prisma.js';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.send(users)
})

router.post('/', (req: Request, res: Response) => {
    
})

export {router};