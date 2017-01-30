module.exports = (settings, repository) => {
    var Security = require('./domain'),
        SecurityReqLog = Security.SecurityReqLog
    return {
        log: () => {
            var log = new SecurityReqLog()
            log.save()
        }
    }
}