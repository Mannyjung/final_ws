const express = require('express');
const hbs = require('express-handlebars');
const indexRouter = require('./routes/covid');
const path = require('path');

// 1. Configuration here
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT|| 3000;

const fetch = require('node-fetch');
global.fetch = fetch;

const app = express();

//Template engine setting

//Middleware เพื่ออ่าน req.body
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//router
app.use('/covid19', indexRouter);

app.engine('hbs', hbs({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
//middleware
//app.use(cors());
//app.use(morgan('common'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(
  PORT,
  () => {
    console.log(`Listening to port ${PORT}`);
  }
);
