import express from "express";
import diaryUpload from "../contorller/diary/diaryUpload.js";
import diaryDelete from "../contorller/diary/diaryDelete.js";
import authJWT from '../middleware/auth/authMiddleware.js';

const router = express.Router();

// 일기 쓰기
// POST /api/diary/diaryUpload
router.post('/diaryUpload', authJWT, diaryUpload);

// 24시간 지난 일기 삭제
// DELETE /api/diary/diaryDelete
router.delete('/diaryDelete', diaryDelete);

export default router;
