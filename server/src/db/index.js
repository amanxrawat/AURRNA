import mongoose from 'mongoose';
import {DB_NAME} from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\nMongo DB connection successful`);
        console.log(`\nConnection instance is ${connectionInstance}`);
    } catch (error) {
        console.error("MongoDB connection failed", error);
        process.exit(1);
    }
}

export {connectDB}