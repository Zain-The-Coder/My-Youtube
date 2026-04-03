import mongoose from "mongoose";
import { dbName } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`);
        console.log(`MongoDB Connected || DB Host : ${connectionInstance.connection.host}`)
    } catch (e) {
        console.log(`MongoDB Connection Error ${e}`);
        process.exit(1);
    }
}

export default connectDB ;