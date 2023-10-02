import express from "express";
import authRouter from "./authRouter.js";
import diaryRouter from "./diaryRouter.js";

const router = express.Router();

// auth
router.use('/api/user', authRouter);

// diary
router.use('/api/diary', diaryRouter);

export default router;