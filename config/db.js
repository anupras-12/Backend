import mongoose from "mongoose";

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("mongoose connected succesfully")
    } catch(error){
        console.error("MongoDB connection error:",error.message);
        process.exit(1);
    }
};

export default connectDB;
