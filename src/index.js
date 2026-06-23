import dotenv from 'dotenv' ;
import { app } from "./app.js";
import connectDB from './db/index.js';
import chalk from 'chalk';

dotenv.config({
    path : "./env"
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , (req , res) => {
        console.log(chalk.bold.blueBright(`Server Is Running At ${process.env.PORT}`));
    })
}).catch((err) => {
    console.log(chalk.red.bold(`MongoDB Connecction Failed : ${err}`));
})


