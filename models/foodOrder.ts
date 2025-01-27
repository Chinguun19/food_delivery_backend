import { timeStamp } from 'console';
import {model, models, Schema} from 'mongoose';

export const FoodOrderItemSchema = new Schema({
    food: String,
    quantity: Number,
});

export const FOOD_ORDER_SCHEMA = new Schema(
    {
        user: String,
        totalPrice: Number,
        foodOrderItems: [FoodOrderItemSchema],
        status: {
            type: String,
            enum: ['PENDING', 'CANCELED', 'DELIVERED'],
            default: 'PENDING',
        },
    },
    {timestamps: true}
);

const FoodOrderModel = models['FoodOrder'] || model('FoodOrder', FOOD_ORDER_SCHEMA);

export {FoodOrderModel}