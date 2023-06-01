import express from "express"
import {createProduct,getProduct,getProductById} from "../controller/product"



const productRoutes = express.Router()

productRoutes.get("/",getProduct)
productRoutes.post("/",createProduct)
productRoutes.get("/:id",getProductById)

export default productRoutes