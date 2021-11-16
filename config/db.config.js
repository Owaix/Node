'user strict';

const mysql = require('mysql');
const dbConn = mysql.createConnection({
  host     : 'localhost',//'sql109.move.pk',
  user     : 'root',//'mov_19055772',
  password : '',//'q0ckgs4r',
  database : 'carsale_db'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;