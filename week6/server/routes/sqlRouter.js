const express = require("express");
const mysql = require("mysql");
const sqlRouter = express.Router();


const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "password",
  database: "avengers"
});

sqlRouter.get('/heroes', (req, res, next) => {

  let sql = "SELECT * FROM avengers"
  db.query(sql, (err, result)=> {
    if(err){
      return next(err);
    }

    res.send(result)
  })
})
module.exports = sqlRouter