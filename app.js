var db_connection = require('./mydb_connection');
var express = require('express');
// var indexRouter = require('./routes/index');
var usersRouter = require('./users');
var app = express();
let mydb_connection;
global.con = mydb_connection;
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
module.exports=app;
