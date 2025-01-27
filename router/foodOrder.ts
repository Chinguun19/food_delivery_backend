
import { CustomRequest } from "../customRequest"
import { FoodOrderModel } from "../models/foodOrder";
import { FoodOrderItemSchema } from "../models/foodOrder";
import { FOOD_ORDER_SCHEMA } from "../models/foodOrder";
import { Request, Response, Router } from "express";

export const foodOrderRouter = Router() 

foodOrderRouter.post('/', auth, async (req: CustomRequest, res: Response) => {


    const user = req?.userId;
    const {foodOrderItems, totalPrice} = req.body;

    const order = {user, foodOrderItems, totalPrice}

})
