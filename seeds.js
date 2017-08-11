var seed = function () {

    const config = require('./config');

    /* Database and models setup */
    const connection = require('./models/main')('connection');
    const User = require('./models/main')('user');
    const Post = require('./models/main')('post');
    const Hashtag = require('./models/main')('hashtag');
    const Sponsor = require('./models/main')('sponsor');
    const Category = require('./models/main')('category');
    const Session = require('./models/main')('session');

    // force: true here is only in the development env change in config.js
    connection.sync({
        force: config.force
    }).then(function () {
        console.log('Database created succesfully...');
        // For Testing
        User.create({
            alias: "test",
            password: "123456789",
            name: "test",
            email: "test@test.com"
        }).then(function (user) {
            console.log("User created successfully");
            Post.create({
                content: "initial topic",
            }).then(function (post) {
                Hashtag.create({
                    title: "test",
                }).then((hashtag) => {
                    hashtag.setPosts([post]);
                    return user.setPosts([post]);
                });
            })
        }).catch(console.log);

        // seed categories
        // Category.create({ name: 'General' });
        // Category.create({ name: 'Computer' });
        // Category.create({ name: 'Electronics' });
        // Category.create({ name: 'Communications' });
        // Category.create({ name: 'Power (Electrical)' });
        // Category.create({ name: 'Civil' });

        // seed sessions
        const lecture_type = 'lecture';
        const gallery_type = 'gallery';
        const workshop_type = 'workshop';

        Session.create({
            name: 'Registration',
            start: '09:00',
            end: '10:00',
            day: '2017-08-21',
            type: 'lecture',
            categories: []
        });


        // seed sponsors


    }).catch(console.log);
};

module.exports = seed;