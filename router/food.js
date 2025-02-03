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
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodRouter = void 0;
const food_1 = require("../models/food");
const express_1 = require("express");
exports.foodRouter = (0, express_1.Router)();
exports.foodRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body;
    const newItem = yield food_1.FoodModel.create(name);
    res.send({
        message: "New category", newItem
    });
}));
exports.foodRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield food_1.FoodModel.find({}).populate('category');
    console.log(products);
    res.json(products);
}));
exports.foodRouter.get('/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const product = yield food_1.FoodModel.findById(_id);
    res.json(product);
}));
