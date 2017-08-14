var uuid = require('uuid');

module.exports = function generateToken(User, v4, callback) {
    var token = null;
    if (v4) {
        token = uuid.v4()
    } else {
        token = uuid.v1();
    }

    User.findOne({
        where: {
            token: token
        }
    }).then(function (user) {
        if (user) {
            // callback(generateToken(User, true));
            return generateToken(User, true, callback);
        } else {
            callback(token);
        }
    }).catch(function (error) {
        throw new Error("Internal server error");
    });
}