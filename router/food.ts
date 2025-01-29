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

foodRouter.get('/', async (req: Request, res: Response) => {
   const products = await FoodModel.find({}).populate('category');
   console.log(products)
   res.json(products)

})
foodRouter.get('/:_id', async (req: Request, res: Response) => {
    const { _id } = req.params
    const product = await FoodModel.findById(_id);
    res.json(product)
})