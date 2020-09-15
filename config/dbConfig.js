'use strict'

const mySqlConfig = {
    host : "localhost",
    user : "root",
    password : "root",
    db : "mydb",
    connLimt : 30,
    dynamicConn : 32,
    idleTime : 1000,
    timeout : 600
}

class dbConfig{
    constructor(){
        this.mySqlConfig = mySqlConfig
    }
}
module.exports = new dbConfig
