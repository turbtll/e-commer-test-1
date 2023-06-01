import Order from "../models/order"
import {IOrder, IOrderItems} from "../types"
import { Request,Response } from "express"
import * as dotenv from "dotenv"
dotenv.config()

import stripe from "stripe"

const  stripeClient  = new stripe(process.env.STRIPE_SECRET_KEY ,{
    apiVersion:"2022-11-15"
})




type CreateOrderType = Pick<IOrder,"deliveryAddress" | "totalPrice"| "user" | "orderItems">

const BASE_UNIT = 100

const getTotalAmount =(orderItems:IOrderItems[])=>{
    return orderItems.reduce((acc,item)=>acc + item.price * item.quantity,0)*BASE_UNIT
}



export const createOrder = async (req : Request, res : Response) => {


    try {
        const {deliveryAddress , totalPrice,user,orderItems} : CreateOrderType = req.body

        const totalAmount = getTotalAmount(orderItems)

        const paymentIntent = await stripeClient.paymentIntents.create({
            
            amount  : totalAmount,
            currency : "usd"
        })

   
  


        const orders = await Order.create (  {deliveryAddress , totalPrice,user,orderItems,
        paymentStatus:"pending",paymentDetails:{} ,paymentIntentId : paymentIntent.id})


        res.send({clientSecret: paymentIntent.client_secret,

            })
    }
    catch (error){ 
        console.log(error
            )
            throw error
    }
}