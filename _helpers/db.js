const config = require('config.json');
const mysql = require('mysql');
const { Sequelize} = require('sequelize')

module.exports = db = [];

initialize();
//thuc thi 1 lan khoi tao api

async function initialize() {

    //create db if it doesn't already exist
    const { host, port, user, password, database} = config.database
    const connection = await mysql.createConnection({host, port, user, password})
    await connection.query(`CREATE DATABASE IF NOT EXIST \`${database}\`;`);

    //connect db
    const sequelize = new Sequelize(database, user, passport, {dialect:'mysql'});
    // init models and add them to export db object

    db.User = require('../users/user.model')(sequelize);
    // tu dong tao/ cap nhat cac bang trong co so du lieu trong Mysql de phu hop voi mo hinh Sequelize
    await sequelize.sync({alter:true})
}