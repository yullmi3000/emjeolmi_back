import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

// const mysql = require('mysql');
// const path = require('path');
// require('dotenv').config({ path: path.join(__dirname, './env/server.env') });

const connection = { //database 접속 정보 입력
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    connectionLimit : 30 // 커넥션 수 30개로 설정
};
  
const pool = mysql.createPool(connection);
export default pool;