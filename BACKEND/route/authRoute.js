import { login, logOut, signUp } from '../controller/authController.js';
import express from 'express' ;

const authRouter  =  express.Router() ;

authRouter.post("/signup",signUp);
authRouter.post("/login",login);
authRouter.get("/logout",logOut);

export default authRouter ;