require('dotenv').config({path: __dirname + '/.env'});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

//middlewares
const addDb = require('./middleware/addDb.middleware');

//destruction of the dotenv
const {
    port,

} = process.env;



const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(addDb());




console.log(port);
app.listen(port, () => console.log(`listening on port: ${port}`));
