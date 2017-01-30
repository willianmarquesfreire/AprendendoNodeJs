module.exports = (settings) => {
    var mongoose = require('mongoose')

    mongoose.connect(settings.mongoDBUrl)
}