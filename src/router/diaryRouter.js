import express from "express";
import diaryUpload from "../contorller/diary/diaryUpload.js";
import authJWT from '../middleware/auth/authMiddleware.js';

const router = express.Router();

// 일기 쓰기
// POST /api/diary/diaryUpload
router.post('/diaryUpload', authJWT, diaryUpload);

export default router;
