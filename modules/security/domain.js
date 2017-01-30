var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var SecurityReqLogSchema = new Schema({
    request: String,
    created_at: Date,
    updated_at: Date
})


SecurityReqLogSchema.pre('save', function(next) {
    var currentDate = new Date()

    this.updated_at = currentDate

    if (!this.created_at)
        this.created_at = currentDate
    
    this.request = currentDate.toString()
    
    next()
})

var SecurityReqLog = mongoose.model('SecurityReqLog', SecurityReqLogSchema)

module.exports = {SecurityReqLog}