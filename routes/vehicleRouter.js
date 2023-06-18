import express from 'express'
import { addVehicles, getAllVehicles } from '../controllers/vehicleController.js'

const vehicleRouter=express.Router()

vehicleRouter.get('/getVehicles',getAllVehicles)

vehicleRouter.post('/add/vehicle',addVehicles)


export default vehicleRouter