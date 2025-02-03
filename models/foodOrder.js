"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodOrderModel = exports.FOOD_ORDER_SCHEMA = exports.FoodOrderItemSchema = void 0;
const mongoose_1 = require("mongoose");
exports.FoodOrderItemSchema = new mongoose_1.Schema({
    food: String,
    quantity: Number,
});
exports.FOOD_ORDER_SCHEMA = new mongoose_1.Schema({
    user: String,
    totalPrice: Number,
    foodOrderItems: [exports.FoodOrderItemSchema],
    status: {
        type: String,
        enum: ['PENDING', 'CANCELED', 'DELIVERED'],
        default: 'PENDING',
    },
}, { timestamps: true });
const FoodOrderModel = mongoose_1.models['FoodOrder'] || (0, mongoose_1.model)('FoodOrder', exports.FOOD_ORDER_SCHEMA);
exports.FoodOrderModel = FoodOrderModel;
