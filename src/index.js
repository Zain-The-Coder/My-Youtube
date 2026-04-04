import mongoose from "mongoose";
import { dbName } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv' ;
import { app } from "./app.js";

dotenv.config({
    path : "./env"
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server Is Running At ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log(`MongoDB Connection Failed || ${err}`);
})







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