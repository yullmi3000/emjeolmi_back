import pool from "../../config/database.js";
import { deleteDiary } from "../../dao/diary/diaryDao.js";

export const diaryDelete = async (req, res) => {

    try {
        const conn = await pool.getConnection();        
        await deleteDiary(conn);
        res.status(200).send({
            ok: true,
            message: 'diary deleted',
        })
        conn.release();
    } catch (error) {
        console.log("error: ", error);
        res.send({
            ok: false,
            message: error.message
        });
    }
}

export default diaryDelete;