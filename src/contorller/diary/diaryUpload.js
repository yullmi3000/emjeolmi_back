import pool from "../../config/database.js";
import { createDiary } from "../../dao/diary/diaryDao.js";
import authJWT from '../../middleware/auth/authMiddleware.js';

export const diaryUpload = async (req, res) => {

    const { title, content } = req.body;
    const rid = req.id;
    console.log("req.id: ", req.id);

    try {
        const conn = await pool.getConnection();
        const params = [rid, title, content];
        
        // 일기 등록 sql
        const [newDiary] = await createDiary(conn, params);
        res.status(200).send({
            message: 'Diary registration complete',
        })
        conn.release();
    } catch (error) {
        console.log("error: ", error);
        res.send({
            message: error.message
        });
    }
}

export default diaryUpload;