'use strict';

var User = require('../models/main')('user');
var tokenGenerator = require('../helpers/auth_token');
const bcrypt = require('bcrypt-nodejs');
var Session = require('../models/main')('session');
var Key = require('../models/main')('key');
var parallel = require('async/parallel');

// TODO: remove
// for debugging purpose only
function showUser(req, res) {
    res.send(user).end()
}


// TODO: for debuging remove when production
function index(req, res) {
    User.findAll({
        include: [{
            model: Session,
            as: 'sessions'
        }]
    }).then(function (users) {
        res.status(200).send(users).end();
    }).catch(function (err) {
        res.status(500).send({ error: err }).end();
    })
}

// GET /show/:alias gets the information of a user
function show(req, res) {
    User.findOne({
        where: {
            alias: req.params.alias
        },
        include: [{
            model: Session, as: "sessions",
            attributes: ["id", "name", "type"]
        }],
        attributes: ['id', 'alias', 'email', 'collage', 'department']
    }).then(function (user) {
        if (!user) {
            // user not found send 404
            res.status(404).end();
        } else {
            res.status(200).send(user).end();
        }
    }).catch(function (err) {
        res.status(500).send({ error: err }).end();
    })
}

/*
 This function is called from updateWrapper when the authorization
 if complete to edit the user
 */
// PUT /users/:alias
function update(req, res) {
    User.update(req.body, {
        where: {
            alias: req.params.alias
        },
        // permit only the following fields to be updated
        fields: ['alias', 'email', 'collage', 'department', 'name']
    }).then(function (user) {
        if (!user) res.status(404).end();

        res.status(200).send(user).end();
    }).catch(function (err) {
        res.status(500).send({ error: err }).end();
    })
}

/*
 Checks if the user requesting edit has the authentication
 key of the user to edit
 TODO: Add admin edit
 */
// PUT /users/:alias
function updateWrapper(req, res) {
    if (!req.user || !req.params.alias || req.user.alias != req.params.alias) {
        res.status(401).end();
    } else {
        return update(req, res);
    }
}

/*
 if the key given in the body of the request is the same as the key
 in the database then the user is activated
 */
// POST /users/:id/verify
function verify(req, res) {
    Key.findOne({
        where: { value: req.body.key }
    }).then((key) => {
        console.log("\n\n" + JSON.stringify(key) + "\n\n");
        User.findById(req.params.id).then((user) => {
            user.update({
                activated: true
            }).then(() => {
                Key.destroy({ where: { value: key.value } }).then(() => {
                    res.status(200).send({ msg: 'User verified successfully' }).end();
                });
            }).catch((err) => {
                res.status(500).send({ error: err }).end();
            });
        }).catch((err) => {
            res.status(401).send({ error: 'User not found' }).end();
        });
    }).catch((err) => {
        res.status(401).send({ error: 'Key not found' }).end();
    });
}


// POST /logout Authorization: token logs out a user
function logout(req, res) {
    // get the auth_token form the header of the request
    var token = req.get('Authorization').slice(7);

    if (!token) {
        // if no token found send 400 and end the
        res.status(400).end();
    } else {
        // update the token to null to logout
        User.update({
            token: null
        }, {
                where: {
                    token: token
                }
            }).then(function () {
                res.status(200).end();
            }).catch(function (err) {
                // 500: internal server error
                res.status(500).send({ error: err }).end();
            });
    }
}

// POST /login {alias: user_alias, password: user_password} logs in a user
// if information is valid
function login(req, res) {

    var email = req.body.email;
    var password = req.body.password;
    var token = null;
    // find the user with the alias and password
    User.findOne({
        where: {
            email: email,
        }
    }).then(function (user) {
        if (!user) {
            res.status(404).send({
                error: 'Username or password is not correct .. '
            }).end();
        } else if (!bcrypt.compareSync(password, user.password)) {
            res.status(401).send({
                error: "Username or password is incorrect .. "
            }).end();
        } else {
            tokenGenerator(User, false, function (token) {
                user.update({
                    token: token
                }).then(function (user) {
                    console.log("\n\n\nbefore" + JSON.stringify(user.token) + "\n\n\n");
                    res.setHeader('Authorization', 'Bearer ' + token);
                    res.status(200).send({
                        mssg: "User logged in successfully.. ",
                        user: user
                    }).end();
                }).catch(function (err) {
                    throw err
                });
            });
        }
    }).catch(function (err) {
        console.log(err);
        res.status(500).send({
            error: 'Internal server error.. '
        }).end();
    });
}

// POST /users/:id/add/session/:sid
var addSession = function (req, res) {

    parallel([(callback) => {
        User.findById(req.params.id).then((user) => {
            if (!user) {
                callback("User not found", null);
                res.status(404);
            }
            callback(null, user);
        }).catch((err) => callback(err, null));
    }, (callback) => {
        Session.findById(req.params.sid).then((session) => {
            if (!session) {
                res.status(404);
                callback("Session not found", null);
            }
            callback(null, session);
        }).catch((err) => callback(err, null));
    }], function (err, results) {
        if (err) res.status(500).send({ error: err }).end();
        var user = results[0];
        var session = results[1];
        var reservation_session_types = new Set();
        var reservation_session_times = new Set();

        user.getSessions().then((sessions) => {
            sessions.forEach((element) => {
                reservation_session_types.add(element.reservation_type);
                reservation_session_times.add({ start: element.start, end: element.end });
            })

            var available = true;
            reservation_session_times.forEach((reserved_session) => {
                var start_time = require('moment')(reserved_session.start, 'HH:mm a');
                var end_time = require('moment')(reserved_session.end, 'HH:mm a');
                var session_start = require('moment')(session.start, 'HH:mm a');
                var session_end = require('moment')(session.end, 'HH:mm a');

                if (session_start.isSameOrBefore(end_time) && session_end.isSameOrAfter(start_time)) {
                    available = false;
                }
            });

            sessions.forEach((element) => {
                if (element.id == session.id) {
                    res.status(400).json({ error: "User already reserved this session" }).end();
                    throw false;
                } else if (reservation_session_types.has(session.reservation_type)) {
                    res.status(400).json({ error: "Can't reserve more slots of this type" }).end();
                    throw false;
                } else if (!available) {
                    res.status(400).json({ error: "User already reserved a session in this time slot" }).end();
                    throw false;
                }
            }, this);

            if (session.number_of_seats > 0) {
                user.addSession(session).then(() => {
                    session.number_of_seats -= 1;
                    session.save();
                    res.status(200).send({ message: "Session reserved successfully" }).end();
                }).catch((err) => {
                    res.status(500).send({ error: err }).end();
                });
            } else {
                res.status(400).send({ error: "No enough seats" }).end();
            }
        });
    });
};


// POST /users/:id/remove/session/:sid
var removeSession = function (req, res) {
    parallel([(callback) => {
        User.findById(req.params.id).then((user) => {
            if (!user) {
                callback("User not found", null);
                res.status(404);
            }
            callback(null, user);
        }).catch((err) => callback(err, null));
    }, (callback) => {
        Session.findById(req.params.sid).then((session) => {
            if (!session) {
                res.status(404);
                callback("Session not found", null);
            }
            callback(null, session);
        }).catch((err) => callback(err, null));
    }], function (err, results) {
        if (err) res.status(500).send({ error: err }).end();
        var user = results[0];
        var session = results[1];
        user.removeSession(session).then(() => {
            session.number_of_seats += 1;
            session.save();
            res.status(200).end();
        }).catch((err) => {
            res.status(500).send({ error: err }).end();
        });
    })
};

// GET /users/:id/sessions
var getSessions = function (req, res) {
    User.findById(req.params.id).then((user) => {
        user.getSessions().then((sessions) => {
            res.status(200).send(sessions).end();
        }).catch((err) => {
            console.log(err);
            res.status(404).send({ error: "No sessions reserved." }).end();
        });
    }).catch((err) => {
        console.log(err);
        res.status(404).send({ error: "User not found" }).end();
    });
};

//POST /signup {alias: 'alias', name: 'bebo', email: 'b@b.com', password:'0931209'}
var signup = function (req, res) {
    User.create({
        alias: req.body.alias,
        password: req.body.password,
        name: req.body.name,
        email: req.body.email
    }).then(function (createdUser) {
        res.status(200).send({ user: createdUser }).end();
    }).catch((err) => {
        res.status(500).send({ error: err }).end();
    });
};

module.exports = {
    login: login,
    logout: logout,
    index: index,
    show: show,
    update: updateWrapper,
    verify: verify,
    showUser: showUser,
    removeSession: removeSession,
    addSession: addSession,
    signup: signup,
    getSessions: getSessions
};