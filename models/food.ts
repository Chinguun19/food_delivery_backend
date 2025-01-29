import { ObjectId } from "mongodb"
import mongoose, { Schema } from "mongoose"
import { FoodCategoryModel } from "./food-category"

export const FOOD_SCHEMA = new mongoose.Schema({
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,    
    category: {
        type: Schema.Types.ObjectId,
        ref: FoodCategoryModel                          
    }

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