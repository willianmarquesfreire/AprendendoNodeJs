module.exports = (app, settings, managerDB) => {
    var express = require('express'),
        ap = express(),
        router = express.Router(),
        bodyParser = require('body-parser'),
        repository = require('./repository')(settings, managerDB),
        service = require('./service')(settings, repository)


    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.all('*', (req, res, next) => {
        console.log("Request Security => ")
        console.log(ap)
        next()
    })
    return router
}