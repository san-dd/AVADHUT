'use strict'
const mysqldb = require('./mySqlDbModel')

function masterModels(conn){
    let masterModels = {
        "mySqlConn":mysqldb.mySqlConn
    }
    return masterModels[conn]
}
process.on('exit',()=>{
    mysqldb.mySqlConn.end()
})
class dbHandler{
    format(query,values){
        return mysqldb.mysql.format(query,values)
    }
    mySql(func,conn,query,values,callback){
        if(values) query = mysqldb.mysql.format(query,values)
        masterModels(conn).getConnection((error,connection)=>{
            if(!error) connection.query(query,(error1,doc)=>{
                connection.release()
                if(error1) callback({success:false,error:error1})
                else callback({success:true,doc:doc})
            })
            else callback({success:false,error:error})
        })
    }
    getMysqlConn(conn,callback){
        masterModels(conn).getConnection((error,connection)=>{
            if(!error) callback({success:true,connection:connection})
            else callback({success:false,error:error})
        })
    }
}
module.exports = new dbHandler