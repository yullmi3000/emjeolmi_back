import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from "./src/router/index.js";
import cors from 'cors';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json({
    limit : '50mb'
}));

const corsOptions = {
    origin: ['https://7c56-1-210-103-203.ngrok-free.app', 'http://localhost:3000', 'http://emjeolmi-chainary.c6jdftrp38iy.ap-northeast-2.rds.amazonaws.com:8080'],
    credentials: true
}

app.use(cors(corsOptions));

app.use('/', router);

app.get('/', (req, res) => {
    res.send('Hello, ngrok!');
  });
  

const SERVER_HOST = process.env.SERVER_HOST;
app.listen(SERVER_HOST, '0.0.0.0', () => {
    console.log(`✅ Server Start Listening on port http://localhost:${SERVER_HOST}`);
});

export default app;
