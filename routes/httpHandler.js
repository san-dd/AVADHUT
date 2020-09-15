/**
 * Created by Prasad Deshpande on 28/05/19.
 */
'use strict'
const http = require('http')
const routes = require('./routesHandler')
const emitter = require('events').EventEmitter
const appConfig = require('../config/appConfig')

class HttpHandler{
    startServer(){
        try {
            let server = http.createServer(routes.app).listen(appConfig.port,appConfig.host, () => {
                console.log('Server listening on port ' + appConfig.port)
            })
            emitter.defaultMaxListeners = 0
            process.on("unhandledRejection", (error) => {
                console.log(new Date(), "unhandledRejection...")
                console.log(error)
            })
            process.on("uncaughtException", (error) => {
                console.log(new Date(), "uncaughtException...")
                console.log(error)
            })
            process.on('error', (error) => {
                console.log(new Date(), "Server Process error...")
                console.log(error)
            })
            process.on('SIGINT', () => {
                server.close()
                routes.toobusy.shutdown()
                process.exit()
            })
        }
        catch (error) {
            console.log(new Date(), "Server error...")
            console.log(error)
        }
    }
}
module.exports = new HttpHandler