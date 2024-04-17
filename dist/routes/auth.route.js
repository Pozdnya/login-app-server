import express from "express";
import { authConstroller } from "../controllers/auth.controller.js";
export const authRouter = express.Router();
authRouter.post('/registration', authConstroller.register);
