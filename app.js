import bodyParser from 'body-parser';
import express from 'express';

import router from './routes.js';

const app = express();
const port = 8383;

app.set('view engine', 'ejs');
app.use(express.static('frontend'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

app.listen((8383), () => {
    console.log('Servidor aberto em http://localhost:' + port);
})