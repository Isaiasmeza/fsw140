const express = require("express");
const app = express();
const mysql = require("mysql");
const morgan = require("morgan");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "avengers",
});

app.use(morgan("dev"));
app.use(express.json());
app.use('/', require('./routes/sqlRouter'))


db.connect((err) => {
  if (err) throw err;
  console.log(" DB Connected.");
});


app.listen(4000, () => {
  console.log("Server Success LocalHost:4000");
});
 