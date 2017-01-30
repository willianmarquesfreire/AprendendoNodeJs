var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    expressModifyResponse = require('express-modify-response')
    settings = require('./config/settings'),
    managerDB = require('./config/managerDB')(settings),
    security = require('./modules/security/app')(app, settings, managerDB),
    user = require('./modules/user/app')(settings, managerDB)


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/security/user', user)



var server = app.listen(8084, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("Server Started on http://%s:%s", host, port)
})