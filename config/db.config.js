'user strict';

const mysql = require('mysql');
const dbConn = mysql.createConnection({
  host     : 'sql109.move.pk',
  user     : 'mov_19055772',
  password : 'q0ckgs4r',
  database : 'mov_19055772_test'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;