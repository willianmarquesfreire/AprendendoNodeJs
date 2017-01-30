module.exports = (settings, repository) => {
    var User = require('./domain')
    return {
        save: (user, callback) => {
            var userToSave = new User(user)
            userToSave.save((result) => {
                callback(result)
            })
        },
        find: (callback) => {
            return User.find({}, function (err, users) {
                if (err) throw err
                callback(users)
            })
        }
    }
}