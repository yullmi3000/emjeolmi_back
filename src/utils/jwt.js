import dotenv from 'dotenv';
dotenv.config();

const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;