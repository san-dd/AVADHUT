'use strict'
const mysql = require('mysql')
const dbConfig = require('../config/dbConfig')

class mySqlDbModel{
    constructor() {
        this.mysql = mysql
        this.mySqlConn = mysql.createPool({host:dbConfig.mySqlConfig.host,user:dbConfig.mySqlConfig.user,password:dbConfig.mySqlConfig.password,database:dbConfig.mySqlConfig.db,dateStrings:true,connectionLimit:dbConfig.mySqlConfig.connLimt})
    }
}
module.exports = new mySqlDbModel