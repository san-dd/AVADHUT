'use strict'
const dbHandler = require('../../models/dbHandler')

class userHandler{
    //creste
    createUser(req,res){
        //res.send({message:"created"})
        //database query format details
        dbHandler.mySql("createuser", "mySqlConn", "select * from userdetails", [req.emailid], (result) => {
            if (result.success) {
                res.send()
            }else{
                //handle error
            }
        })
    }

    updateUser(req,res){
        res.send({message:"updated"})
    }
}
module.exports = new userHandler