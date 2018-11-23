const Enum = require("./Enum");
const crypto = require('crypto');

util = {
    passwordHash : function(password) {
        var hash = crypto.createHmac('sha512', Enum['passwordSalt'])
        hash.update(password)
        return hash.digest('hex')
    },
}

module.exports = util
