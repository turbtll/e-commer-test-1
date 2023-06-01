import { Request, Response } from "express";
import Product from "../models/product"
import {IProduct} from "../types"



type CreateProductRequistType = Pick<IProduct,"image" | "name" | "description"|  "price" >
export const createProduct = async (req : Request, res : Response) => {


    try {
        const { image,name,description,price} : CreateProductRequistType = req.body

        const product = await Product.create({
            image,
            name,
            price,
            description
        })


        res.send(product)
    }
    catch (error){ 
        console.log(error
            )
            throw error
    }
}


export const getProduct =  async (req:Request,res:Response) => {

    try {
        const product = await Product.find({})
        res.send(product)

     
    }
    catch(error) {
        console.log(error)
        throw error
    }
    
}

export const getProductById =  async (req:Request,res:Response) => {
    const {id} = req.params
   
    try {
        const product = await Product.findById(id)
        res.send(product)

      
    }
    catch(error) {
        console.log(error)
        throw error
    }
    
}
