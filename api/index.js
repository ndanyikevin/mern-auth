import express from "express";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

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

