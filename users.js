var express = require('express');
var router = express.Router();

router.get('/', function (req, res,next){
    con.query("SELECT * FROM employees", function(err,result,fields){
        if (err) throw err;
        res.send({
            message:'Table Data',
            Total_record:result.length,
            result:result
        })
    })
})

module.exports=router