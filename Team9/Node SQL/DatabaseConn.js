//https://www.w3schools.com/nodejs/nodejs_mysql.asp
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "silva.computing.dundee.ac.uk",
  user: "2019indteam9",
  password: "0908.ind9.8090"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

function test(){
  
    con.query("SELECT first FROM 2019indteam9db.test", function(err, result, fields){
        if (err) throw err;
        console.log(result[0]);
    });
}