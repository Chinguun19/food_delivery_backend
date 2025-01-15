import { FoodModel } from "../models/food";
import { Request, Response, Router } from "express";


export const foodRouter = Router()



foodRouter.post('/', async (req: Request, res: Response) => {
    const name = req.body
    const newItem = await FoodModel.create(name)
        res.send({
            message: "New category", newItem
        })
    
    });