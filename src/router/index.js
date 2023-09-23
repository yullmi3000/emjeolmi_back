import express from "express";
import authRouter from "./auth.js";

const router = express.Router();

// auth
router.use('/api/user', authRouter);

export default router;