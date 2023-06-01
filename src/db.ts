import mongoose from "mongoose"


const connectToDataBase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDb connected",connection.connection.host)

    }catch(error) {
        console.log(error
            )
            throw error
    }
    
}

export default connectToDataBase