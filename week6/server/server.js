  
const express = require('express');
const app = express();
const mysql = require('mysql');
const morgan = require('morgan');

const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password:'password',
  database: 'avengers'
});

app.use(morgan('dev'));
app.use(express.json());


db.connect((err) => {

  if (err) throw err;
  console.log('Successfully Connected to DB.');
});

app.use('/', require('./routes/sqlRouter'))

app.listen(3000, () => {
  console.log('Server Success!');
});