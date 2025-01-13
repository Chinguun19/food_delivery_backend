import cluster1 from 'cluster';
import { timeStamp } from 'console';
import { configDotenv } from 'dotenv';
import express, {Request, Response } from 'express';
import { MongoClient, Timestamp } from 'mongodb';
const mongoose = require('mongoose')

const PORT = 9000;
const app = express();
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

const FOOD_CATEGORY_SCHEMA = new mongoose.Schema({
    categoryName: String,
},
    { Timestamps: true}
)

const FoodCategoryModel = mongoose.model(
    'FoodCategory',
    FOOD_CATEGORY_SCHEMA,
    'food-category'

)


app.get('/', async (req: Request, res: Response) => {

const foodCategories = await FoodCategoryModel.find();
res.json(foodCategories)
    

});

app.get('/create', async (req: Request, res: Response) => {
    const newItem = await FoodCategoryModel.create({
        categoryName: "Pizza",
        timeStamp: true
    })
        res.send({
            message: "New category", newItem
        })
    
    });

app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`)
})