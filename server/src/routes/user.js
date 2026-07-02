import express from 'express';
import { prisma } from '../models/prisma.js';
const router = express.Router();
router.get('/', async (req, res) => {
    const users = await prisma.users.findMany();
    res.send(users);
});
router.post('/', async (req, res) => {
    try {
        console.log('Data has recievd');
        const newUser = await prisma.users.create({
            data: {
                name: req.body.name,
                surname: req.body.surname,
                secondname: req.body.secondname,
                position: req.body.position,
                salary: req.body.salary,
                comingyear: req.body.comingYear,
            }
        });
        console.log(newUser);
        console.log('User has been written');
        res.status(201).send(newUser);
    }
    catch (err) {
        console.error(err);
    }
});
export { router };
