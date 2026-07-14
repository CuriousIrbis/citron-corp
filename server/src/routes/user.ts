import express from 'express'
import type {Request, Response} from 'express'
import { prisma } from '../models/prisma.js';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const users = await prisma.users.findMany();
    res.send(users)
})

router.post('/', async (req: Request, res: Response) => {
    try{
        console.log('Data has recievd')
        const newUser = await prisma.users.create({
            data:{
                name: req.body.name,
                surname: req.body.surname,
                secondname: req.body.secondname,
                position: req.body.position,
                salary: req.body.salary,
                comingyear: req.body.comingYear,
            }
        });

        console.log(newUser);
        res.send({
            status: 201,
            message: 'Пользователь создан'
        })
        console.log('User has been written')
    } catch(err){
        console.error(err)
    }
})

router.delete('/', async (req: Request, res: Response) => {
    const userId = req.body.userid;
    
    try{
        await prisma.users.delete({
            where: {
                id: userId
            }
        })

        res.status(200).json({
            msg: 'Успешное увольнение'
        })
    } catch(err){
        console.error(`Ошибка: ${err}`);
    }
})

export {router};