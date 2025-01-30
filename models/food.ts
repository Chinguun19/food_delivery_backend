import mongoose, { Schema } from "mongoose";

export const FOOD_SCHEMA = new mongoose.Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    ingredients: { type: String },
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory", // Use the correct model name as a string
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export const FoodModel = mongoose.model("Food", FOOD_SCHEMA, "food");


