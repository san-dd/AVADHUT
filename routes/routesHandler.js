'use strict'
const cors = require('cors')
const express = require('express')
const toobusy = require('toobusy-js')
const bodyParser = require('body-parser')

const userHandler=require('../controllers/userManagement/userHandler')

const app = express()
app.set('trust proxy', true)
app.use(cors())
app.use((error,request, response, next)=>{
    if (toobusy()) response.status(503).send("Server is busy right now, try again later")
    else next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//handle request
app.get('/createuser',(request,response)=>{
    userHandler.createUser(request,response)
})

app.post('/updateuser',(request,response)=>{
    userHandler.updateUser(request,response)
})
class RoutesHandler {
    constructor() {
        this.toobusy = toobusy
        this.app = app
    }
}
module.exports = new RoutesHandler
