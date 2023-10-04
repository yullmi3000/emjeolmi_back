// 일기 쓰기
export const createDiary = async (conn, params) => {
    const createDiarySql = `INSERT INTO Diary (rid, title, content, time) VALUES (?,?,?, NOW());`;

    const [newDiary] = await conn.query(createDiarySql, params);
    return [newDiary];
}

// 24시간 지난 일기 삭제하기
export const deleteDiary = async (conn) => {
    const deleteDiarySql = `DELETE FROM Diary WHERE time < DATE_SUB(now(), INTERVAL 1 DAY);`;
    await conn.query(deleteDiarySql);
}