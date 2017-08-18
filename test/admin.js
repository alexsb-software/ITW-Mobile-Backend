const supertest = require('supertest'),
    should = require('should');

var port = process.env.PORT || 8000;
var agent = supertest.agent('http://localhost:' + port);


describe('Admin routers test for Users functionality', function () {
    var User = require('../models/main')('user');
    var test_user = null;

    // POST /admin/create/user
    it("Should create new user - return 201 and location of the new user", function (done) {
        user = {
            name: "some name",
            email: "test@test.com",
            password: "122342342435"
        }

        agent.post('/admin/create/user')
            .send(user)
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);
                res.body.should.not.equal(undefined);

                User.findOne({
                    where: {
                        name: 'some name'
                    }
                }).then(function (user) {
                    res.body.id.should.equal(user.id);
                    test_user = user;
                    done();
                }).catch(done);
            });
    });

    it("Should update the key of the user", function (done) {
        agent.post('/admin/update/key')
            .send({ id: test_user.id, key: 'test-key' })
            .expect(200)
            .end(function (err, res) {
                User.findOne({
                    where: {
                        id: test_user.id
                    }
                }).then(function (user) {
                    (user.key === "test-key").should.equal(true);
                    done();
                }).catch(done);
            });
    });

    it("should delete the user", function (done) {
        agent.post('/admin/delete/user')
            .send({ id: test_user.id })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                User.findOne({
                    where: {
                        name: test_user.name
                    }
                }).then(function (user) {
                    (user === null).should.equal(true)
                    done();
                }).catch(done);
            });
    });

})