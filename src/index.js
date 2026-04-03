import mongoose from "mongoose";
import { dbName } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv' ;

dotenv.config({
    path : "./env"
})

connectDB();









// import express from 'express' ;
// const app = express();

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`);
//         app.on("error" , (err) => {
//             console.log("Not Able to connect database" , err);
//             throw err ;
//         })

//         app.listen(process.env.PORT , () => {
//             console.log(`App Is Listen On Port : ${process.env.PORT} `)
//         })
//     } catch (err) {
//         console.log(`Error : ${err}`);
//         throw err ;
//     }
// })()