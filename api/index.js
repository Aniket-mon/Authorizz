import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/User_route.js'
dotenv.config()

const app = express()

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB') //return if connected successfully
    })
    .catch((err) => {
        console.log(err) //return if any error
    })

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.use('/api/user', userRoutes)

