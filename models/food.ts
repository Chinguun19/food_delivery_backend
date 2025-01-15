import { ObjectId } from "mongodb"
import mongoose from "mongoose"

export const FOOD_SCHEMA = new mongoose.Schema({
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
export const FoodModel = mongoose.model(
    'Food',
    FOOD_SCHEMA,
    'food'
)