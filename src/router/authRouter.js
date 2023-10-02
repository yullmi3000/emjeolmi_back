import express from "express";
import auth from "../contorller/auth/auth.js";

const router = express.Router();

// POST /api/user/auth
router.post('/auth', auth);

export default router;
