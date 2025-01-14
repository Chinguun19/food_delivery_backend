import cluster1 from 'cluster';
import { timeStamp } from 'console';
import { configDotenv } from 'dotenv';
import express, {Request, Response } from 'express';
import { MongoClient, ObjectId, Timestamp } from 'mongodb';
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
{
    timestamps: true
}
)

const FoodCategoryModel = mongoose.model(
    'FoodCategory',
    FOOD_CATEGORY_SCHEMA,
    'food-category'
)

const FOOD_SCHEMA = new mongoose.Schema({
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,
    category: ObjectId
},
{
    timestamps: true
}
)
const FoodModel = mongoose.model(
    'Food',
    FOOD_SCHEMA,
    'food'
)

app.post('/food/', async (req: Request, res: Response) => {
    app.use(express.json())
    const name = req.body
    const newItem = await FoodModel.create(name)
        res.send({
            message: "New category", newItem
        })
    
    });







app.get('/food-category/:_id', async (req: Request, res: Response) => {
    const {_id} = req.params
    try {
   
        if (!mongoose.Types.ObjectId.isValid(_id)) {
             res.status(400).json({ message: 'Invalid ID format' });
        }

        const foodCategories = await FoodCategoryModel.findById(_id);

        if (!foodCategories) {
             res.status(404).json({ message: 'Category not found' });
        }

        console.log(foodCategories); 
        res.status(200).json(foodCategories);
    } catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

})

app.get('/food-category', async (req: Request, res: Response) => {

const foodCategories = await FoodCategoryModel.find();
console.log(foodCategories)
res.json(foodCategories)
    

});

app.get('/food-category/:id', async (req: Request, res: Response) =>{

    res.json({
        message: 'All Food Category'
    })
})



app.post('/food-category/', async (req: Request, res: Response) => {
    app.use(express.json())
    const name = req.body
    const newItem = await FoodCategoryModel.create(name)
        res.send({
            message: "New category", newItem
        })
    
    });

app.delete('/food-category/:_id', async (req: Request, res: Response) => {
    app.use(express.json());
    const deleteItem = await FoodCategoryModel.deleteOne(req.params)
    res.send("Delete Data" + deleteItem) 
        
    })



    app.put('/food-category/:_id', async (req: Request, res: Response) => {
        app.use(express.json());
        const {_id} = req.params; 
        const updates = req.body; 
        console.log(updates)
 
        if (!mongoose.Types.ObjectId.isValid(_id)) {
             res.status(400).json({ message: 'Invalid ID format' });
        }
    
        try {
            const updateItem = await FoodCategoryModel.findByIdAndUpdate(
                _id, 
                { $set: updates }, 
                { new: true, runValidators: true } 
            );
    
            if (!updateItem) {
                   res.status(404).json({ message: 'Category not found' });
            }
    
          
            res.status(200).json(updateItem);
    
        } catch (error) {
            console.error('Error during update:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
    

    





app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`)
})