const express = require('express');
const app = express();
const envconfig = require('dotenv').config();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const config = require('./config');
const passport = require('passport');
const Strategy = require('passport-http-bearer').Strategy;
const strategySetup = require('./helpers/auth_setup');
// const seed = require('./seeds');
const cors = require('cors');
const connection = require('./models/main')('connection');
const fs = require('fs');


// Routers importing
const moviesRouter = require('./routes/movies');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const postsRouter = require('./routes/posts');
const hashtagRouter = require('./routes/hashtags');
const sponsorsRouter = require('./routes/sponsors');
const categoriesRouter = require('./routes/categories');
const sessionsRouter = require('./routes/sessions')
const speakersRouter = require('./routes/speakers');

connection.sync({
    force: config.force
});


app.use(cors({ credentials: true, origin: true }));
app.options('*', cors());

// setup the body parser middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('public'));

// authentication setup
app.use(passport.initialize());
passport.use(strategySetup(Strategy));

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// routers setup
app.use(function (req, res, next) {
    var method = req.method;
    console.log(method, " request to: ", req.url);
    next();
});

app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/hashtags', hashtagRouter);
app.use('/sponsors', sponsorsRouter);
app.use('/categories', categoriesRouter);
app.use('/sessions', sessionsRouter);
app.use('/speakers', speakersRouter);

// TODO: important need authentication for the admin route
app.use('/admin', adminRouter);

app.get('/notification', function (req, res) {
    res.status(200).sendFile(__dirname + "/public/not.html");
});

app.get('/keys', function (req, res) {
    res.send(keys).status(200);
});

app.get('/failurejson', function (req, res) {
    res.status(401).send({ error: 'Unauthorized' });
})

app.get('/admin/notify', function (req, res) {
    res.status(200).sendFile(__dirname + "/public/notifications.html");
})

app.get('*', function (req, res) {
    res.status(404).end();
    // Add 404 page if applicable
});

var port = process.env.PORT || config.port;
app.listen(port, function () {
    console.log('Server running on port: ', port);
});

