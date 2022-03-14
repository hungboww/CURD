var mysql = require('mysql');

var con = mysql.createConnection({
    localhost:"localhost",
    user:"root",
    password:"Password@123",
    database:"ecs_dev"
});

con.connect(function (err){
    if (err)throw err;
    console.log("Connected!");
})