import express from 'express';
const userRouter = express.Router();
import userController from '../controllers/user.controller.js';

userRouter.post("/register" , userController.registerUser);
userRouter.post("/login" , userController.loginUser);

export default userRouter ;