import mongoose from "mongoose"


export const FOOD_CATEGORY_SCHEMA = new mongoose.Schema({
    categoryName: String,
},
{
    timestamps: true
}
)

export const FoodCategoryModel = mongoose.model(
    'FoodCategory',
    FOOD_CATEGORY_SCHEMA,
    'food-category'
)