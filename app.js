const express = require('express');

const app = express();

<<<<<<< Updated upstream
app.listen(3000, function(){
    console.log('server start on 3000');
})
=======
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json({
    limit : '50mb'
}));

app.use('/', router);

app.get('/', (req, res) => {
    res.send('Hello, ngrok!');
  });
  

const SERVER_HOST = process.env.SERVER_HOST;
app.listen(SERVER_HOST, '0.0.0.0', () => {
    console.log(`✅ Server Start Listening on port http://localhost:${SERVER_HOST}`);
});

>>>>>>> Stashed changes
