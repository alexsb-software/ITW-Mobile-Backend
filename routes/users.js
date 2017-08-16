const express = require('express'),
    router = express.Router(),
    usersController = require('../controllers/users'),
    passport = require('passport');

router.use(function (req, res, next) {
    res.setHeader('content-type', 'application/json');
    next();
});

// router.get('/', usersController.index);
// router.get('/:alias', usersController.show);
router.post('/login', usersController.login);
router.post('/logout', usersController.logout);

router.post('/:id/add/session/:sid', passport.authenticate('bearer', {
    session: false,
    failureRedirect: '/failurejson'
}), usersController.addSession);

router.post('/:id/remove/session/:sid', passport.authenticate('bearer', {
    session: false
}), usersController.removeSession);

router.post('/signup', usersController.signup);

router.get('/:id/sessions', passport.authenticate('bearer', {
    session: false
}), usersController.getSessions);

// updating the user must be authorized 
// router.put('/:alias', passport.authenticate('bearer', {
//     session: false
// }), usersController.update);

// verify the user
router.post('/:id/verify', usersController.verify);

// router.get('/showuser', passport.authenticate('bearer', {
//     session: false
// }), usersController.showUser);

module.exports = router;