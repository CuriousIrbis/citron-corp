import express from "express"

import {router as userRouter} from './user.js'

const root = express.Router();

root.use('/users', userRouter);

export default root;
