"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodCategoryModel = exports.FOOD_CATEGORY_SCHEMA = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.FOOD_CATEGORY_SCHEMA = new mongoose_1.default.Schema({
    categoryName: String,
}, {
    timestamps: true
});
exports.FoodCategoryModel = mongoose_1.default.model('FoodCategory', exports.FOOD_CATEGORY_SCHEMA, 'food-category');
