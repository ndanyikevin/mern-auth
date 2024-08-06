import express from "express";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

import userRoutes from './routes/user.route.js'

dotenv.config();
const uri = process.env.MONGO

const client =  new MongoClient(uri)

async function connectToMongoDB(){
    try{
        await client.connect()
        console.log('Connected to MongoDB')
    }
    catch(err){
        console.error(err)
    }
}

connectToMongoDB()

const app = express()

app.listen(3000, ()=> {
    console.log('Servey listening on port 3000')
})

app.use("/api/user", userRoutes)
