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
    origin: 'http://3.34.72.88/',
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
