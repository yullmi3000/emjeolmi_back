import express from "express";
import auth from "../controller/auth/auth.js";

const router = express.Router();

// POST /api/user/auth
router.post('/auth', auth);

export default router;

