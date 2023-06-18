import express from 'express'
import dotenv from 'dotenv'
import vehicleRouter from './routes/vehicleRouter.js'
import userRouter from './routes/userRouter.js'
import connectioDB from './db/connection.js'

dotenv.config()
const app=express()

app.use(express.json())

const PORT =process.env.PORT
const DBNAME  =process.env.DBNAME
const DBURL  =process.env.DBURL
connectioDB(DBURL,DBNAME)
app.use('/api/vehicles',vehicleRouter)
app.use('/api/user',userRouter)

app.listen(PORT,()=>{
    console.log(`server started at port number ${PORT}`);})
