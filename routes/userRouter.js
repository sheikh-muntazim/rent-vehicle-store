import express from 'express'

import registerVehicle from '../controllers/userController.js';

const userRouter =express.Router()


userRouter.post('/register',registerVehicle)

export default userRouter