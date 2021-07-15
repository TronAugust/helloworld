var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "tron05091999",
  database: "mydb"
});

con.connect(function(err){
  if(err) throw err;
  con.query("select * from customers", function(err, result, fields){
    if(err) throw err;
    console.log(fields[2].name);
  });
});