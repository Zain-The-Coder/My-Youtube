import dotenv from 'dotenv' ;
import { app } from "./app.js";
import connectDB from './db/index.js';
import chalk from 'chalk';

dotenv.config({
    path : "./env"
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(chalk.bold.green(`Server Is Running At ${process.env.PORT}`))
    })
}).catch((err) => {
    console.log(chalk.red.bold(`MongoDB Connecction Failed : ${err}`));
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