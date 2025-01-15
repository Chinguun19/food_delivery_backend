
import { configDotenv } from 'dotenv';
import express, {Request, Response } from 'express';
import { foodCategoryRouter } from './router/food-category';
import { foodRouter } from './router/food';


const cors = require('cors')
const mongoose = require('mongoose')


const PORT = 9000;
const app = express();
app.use(cors())


app.use(express.json());

configDotenv();
const URI = process.env.MONGODB_URI;
console.log(URI);

let client = null;
export const connectMongoDB = async () => {
    const MONGODB_URI: any = process.env.MONGODB_URI;

    if(!MONGODB_URI) {
        
    }
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("succesfully connected to MONGODB")
    }
    catch {


    }


}
connectMongoDB()

app.use('/food-category/', foodCategoryRouter)
app.use('/food/', foodRouter)


app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`)
})