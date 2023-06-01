import * as dotenv from "dotenv"
import express from "express"
import connectToDataBase from "./db"
import productRoutes from "./routes/product"
import orderRoutes from "./routes/order"
import { webhookHandler } from "./webhook"
import cors from "cors"

dotenv.config()




const app = express()

app.use(cors())

app.use(express.json())

connectToDataBase()


app.get("/ping",(req,res)=>{
    res.send("pon1g")
})


app.post("/webhook",express.raw({type:"application/json"}),webhookHandler)

app.use("/products",productRoutes)
app.use("/orders",orderRoutes)

const PORT = process.env.PORT || 3000




const server = app.listen(PORT,()=>{
    console.log("first" ,PORT)
})

process.on("unhandledRejection", (err :Error, promise  )=>{
    console.log("алдаа гарлаа :" ,err.message);
    server.close(()=>{
        process.exit(1)
    })
})