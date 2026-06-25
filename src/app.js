import express from 'express' ;
const app = express();
import cookieParser from 'cookie-parser';
import cors from 'cors' ;
import userRouter from './routes/user.route.js';

app.use(cors({
    origin : process.env.CORS_ORIGIN , 
    credentials : true 
}));

app.use(express.json({limit : '16kb'}));
app.use(express.urlencoded({extended : true , limit : "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());


app.use('/api/auth' , userRouter);


export { app } ;