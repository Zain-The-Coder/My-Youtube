import mongoose from "mongoose";
import { dbName } from "../constants.js";
import chalk from "chalk";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`);
        console.log(chalk.green.bold(`MongoDB Connected || DB Host : ${connectionInstance.connection.host}`));
    } catch (e) {
        console.log(chalk.red.bold(`MongoDB Connection Error : ${e}`));
    }
}
export default connectDB ;