const categoriesSeeder = require('./seeders/categories');
const sessionsSeeder = require('./seeders/sessions');
const speakersSeeder = require('./seeders/speakers');
const keysSeeder = require('./seeders/keys');

var seed = function () {

    const config = require('./config');

    /* Database and models setup */
    const connection = require('./models/main')('connection');
    const User = require('./models/main')('user');
    const Post = require('./models/main')('post');
    const Hashtag = require('./models/main')('hashtag');

    // force: true here is only in the development env change in config.js
    connection.sync({
        force: config.force
    }).then(function () {
        console.log('Database created succesfully...');
        // For Testing
        // User.create({
        //     password: "123456789",
        //     name: "test",
        //     email: "test@test.com"
        // }).then(function (user) {
        //     console.log("User created successfully");
        //     Post.create({
        //         content: "initial topic",
        //     }).then(function (post) {
        //         Hashtag.create({
        //             title: "test",
        //         }).then((hashtag) => {
        //             hashtag.setPosts([post]);
        //             return user.setPosts([post]);
        //         });
        //     })
        // }).catch(console.log);

        // seed categories
        categoriesSeeder();

        // seed sessions
        sessionsSeeder();

        // seed speakers
        speakersSeeder();

        // seed keys
        keysSeeder();

    }).catch(console.log);
};

seed();

module.exports = seed;