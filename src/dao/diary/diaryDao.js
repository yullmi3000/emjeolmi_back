// 일기 쓰기
export const createDiary = async (conn, params) => {
    const createDiarySql = `INSERT INTO Diary (rid, title, content, time) VALUES (?,?,?, NOW());`;

    const [newDiary] = await conn.query(createDiarySql, params);
    return [newDiary];
}