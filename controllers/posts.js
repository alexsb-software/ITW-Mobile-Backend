var Post = require('../models/main')('post');
var each = require('async/each');
var Hashtag = require('../models/main')('hashtag');
var User = require('../models/main')('user');

// GET posts/
function index(req, res) {
    var page = req.params.page || 0;
    var limit = req.params.limit || 10;
    var offset = page * limit;

    Post.findAll({
        offset: offset,
        limit: limit,
        order: [['createdAt', 'DESC']],
        include: {
            model: User
        }
    }).then(function (posts) {
        res.status(200).send(posts).end();
    }).catch(function (err) {
        res.status(500).send(err).end()
    })
}

// GET posts/show/:id gets the information of a post
function show(req, res) {
    Post.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Hashtag, as: "hashtags",
            through: { attributes: [] }
        },
        {
            model: User,
            as: "user",
            attributes: ["id", "alias", "email"],
            through: { attributes: [] }
        }],
        attributes: ['id', 'content', 'userId']
    }).then(function (post) {
        if (!post) {
            // user not found send 404
            res.status(404).end();
        } else {
            res.status(200).send(post).end();
        }
    }).catch(function (err) {
        res.status(500).send({ error: err }).end();
    })
}

/*
    Create new post 
    POST /posts
    the request: 
    {
        content: post content,
        hashtags: ['','']
    }
*/
function create(req, res) {
    var content = req.body.content;
    var hashtagsArray = req.body.hashtags;

    Post.create({
        content: content,
        userId: req.body.user.id
    }).then(function (post) {
        if (hashtagsArray && hashtagsArray.length > 0) {
            var counter = 0;

            hashtagsArray.forEach(function (title) {
                Hashtag.findOrCreate({
                    where: {
                        title: title
                    }
                }).spread(function (hashtag, created) {
                    post.addHashtag(hashtag);
                    counter++;

                    if (counter == hashtagsArray.length) {
                        res.status(201).send(post).end();
                    }
                }).catch(function (err) {
                    res.status(500).send({ error: err }).end();
                });
            });
        }
    }).catch(function (err) {
        res.status(500).send({ error: err }).end();
    });
}


function update(req, res) {
    var postId = req.params.id;

    Post.update(
        { content: req.body.content },
        { where: { id: postId } }
    ).then(function (post) {
        Post.findOne({
            where: { id: postId }
        }).then(function (post) {
            var hashtagsArray = req.body.hashtags;
            if (hashtagsArray && hashtagsArray.length > 0) {
                var counter = 0;
                post.setHashtags([]);

                hashtagsArray.forEach(function (title) {
                    Hashtag.findOrCreate({
                        where: {
                            title: title
                        }
                    }).spread(function (hashtag, created) {
                        post.addHashtag(hashtag).then(function () {
                            counter++;

                            if (counter == hashtagsArray.length) {
                                res.status(200).send(post).end();
                            }
                        });
                    }).catch(function (err) {
                        res.status(500).send({ error: err }).end();
                    });
                });
            }
        }).catch(function (err) {
            res.status(500).send({ error: err }).end();
        });
    }).catch(function (err) {
        res.status(500).send({ error: err }).end();
    });

}

function destroy(req, res) {
    postId = req.params.id;
    Post.findOne({
        where: {
            id: postId
        }
    }).then(function (post) {
        if (!post) res.status(404).end();
        if (post.userId !== req.user.id) {
            res.status(304).end();
        } else {
            post.destroy().then(function () {
                res.status(200).end();
            }).catch(function (err) {
                res.status(500).send({ error: err }).end();
            });
        }
    }).catch(function (err) {
        res.status(500).send({ error: err }).end();
    });
}

module.exports = {
    index: index,
    show: show,
    post: create,
    update: update,
    destroy: destroy
};