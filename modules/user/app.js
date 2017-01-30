module.exports = (settings, managerDB) => {
    var express = require('express'),
        router = express.Router(),
        repository = require('./repository')(settings, managerDB),
        service = require('./service')(settings, repository)


    router.route('/')
        .get((req, res) => {
            service.find((users) => {
                res.send(users)
            })
        })
        .post((req, res, next) => {
            let user = req.body
            service.save(user, (result) => {
                res.send(result)
            })
        })

    return router
}