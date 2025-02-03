"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodCategoryRouter = void 0;
const express_1 = require("express");
const food_category_1 = require("../models/food-category");
const mongoose_1 = __importDefault(require("mongoose"));
exports.foodCategoryRouter = (0, express_1.Router)();
exports.foodCategoryRouter.get('/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        if (!mongoose_1.default.Types.ObjectId.isValid(_id)) {
            res.status(400).json({ message: 'Invalid ID format' });
        }
        const foodCategories = yield food_category_1.FoodCategoryModel.findById(_id);
        if (!foodCategories) {
            res.status(404).json({ message: 'Category not found' });
        }
        console.log(foodCategories);
        res.status(200).json(foodCategories);
    }
    catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
exports.foodCategoryRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodCategories = yield food_category_1.FoodCategoryModel.find();
    console.log(foodCategories);
    res.json(foodCategories);
}));
exports.foodCategoryRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        message: 'All Food Category'
    });
}));
exports.foodCategoryRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body;
    const newItem = yield food_category_1.FoodCategoryModel.create(name);
    res.send({
        message: "New category", newItem
    });
}));
exports.foodCategoryRouter.delete('/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteItem = yield food_category_1.FoodCategoryModel.deleteOne(req.params);
    res.send("Delete Data" + deleteItem);
}));
exports.foodCategoryRouter.put('/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const updates = req.body;
    console.log(updates);
    if (!mongoose_1.default.Types.ObjectId.isValid(_id)) {
        res.status(400).json({ message: 'Invalid ID format' });
    }
    try {
        const updateItem = yield food_category_1.FoodCategoryModel.findByIdAndUpdate(_id, { $set: updates }, { new: true, runValidators: true });
        if (!updateItem) {
            res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(updateItem);
    }
    catch (error) {
        console.error('Error during update:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
