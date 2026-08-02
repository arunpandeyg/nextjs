import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectToMongo = async () => {
    try {
        const conn =  await mongoose.connect(process.env.MONGO_DB_URI);        
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};