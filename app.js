const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const mongoConn = require('./databases/config');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*'
}));

mongoConn();


const proyectos = require('./routes/proyecto');


// middlewares

app.use('/api/proyectos', proyectos);




module.exports = app;
