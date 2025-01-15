import { Request, Response, Router } from "express";
import { FoodCategoryModel } from "../models/food-category";
import mongoose from "mongoose";


export const foodCategoryRouter = Router()





foodCategoryRouter.get('/:_id', async (req: Request, res: Response) => {
    const {_id} = req.params
    try {
   
        if (!mongoose.Types.ObjectId.isValid(_id)) {
             res.status(400).json({ message: 'Invalid ID format' });
        }

        const foodCategories = await FoodCategoryModel.findById(_id);

        if (!foodCategories) {
             res.status(404).json({ message: 'Category not found' });
        }

        console.log(foodCategories); 
        res.status(200).json(foodCategories);
    } catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

})

foodCategoryRouter.get('/', async (req: Request, res: Response) => {

const foodCategories = await FoodCategoryModel.find();
console.log(foodCategories)
res.json(foodCategories)
    

});

foodCategoryRouter.get('/:id', async (req: Request, res: Response) =>{

    res.json({
        message: 'All Food Category'
    })
})



foodCategoryRouter.post('/', async (req: Request, res: Response) => {
   
    const name = req.body
    const newItem = await FoodCategoryModel.create(name)
        res.send({
            message: "New category", newItem
        })
    
    });

    foodCategoryRouter.delete('/:_id', async (req: Request, res: Response) => {
  
    const deleteItem = await FoodCategoryModel.deleteOne(req.params)
    res.send("Delete Data" + deleteItem) 
        
    })



    foodCategoryRouter.put('/:_id', async (req: Request, res: Response) => {
    
        const {_id} = req.params; 
        const updates = req.body; 
        console.log(updates)
 
        if (!mongoose.Types.ObjectId.isValid(_id)) {
             res.status(400).json({ message: 'Invalid ID format' });
        }
    
        try {
            const updateItem = await FoodCategoryModel.findByIdAndUpdate(
                _id, 
                { $set: updates }, 
                { new: true, runValidators: true } 
            );
    
            if (!updateItem) {
                   res.status(404).json({ message: 'Category not found' });
            }
    
          
            res.status(200).json(updateItem);
    
        } catch (error) {
            console.error('Error during update:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });