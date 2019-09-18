//https://www.w3schools.com/nodejs/nodejs_mysql.asp
var mysql = require('mysql');

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000


function test(){
  
  con.query("SELECT first FROM 2019indteam9db.test", function(err, result, fields){
      if (err) throw err;
      console.log(result[0]);
  });
}
var json = '{"result":true, "count":42}';
obj = JSON.parse(json);
app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.get('/', (req, res) => res.send(obj))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


const request = require('request')



var con = mysql.createConnection({
  host: "silva.computing.dundee.ac.uk",
  user: "2019indteam9",
  password: "0908.ind9.8090"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

