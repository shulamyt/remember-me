const express = require('express');
const service = require('./UserService');
class UserWS {
  constructor(router) {
    this.router = express.Router()
                    .get('/users', this.get.bind(this))
                    .post('/users', this.add.bind(this))
                    .put('/user/login', this.login.bind(this));
  }

  get(req, res, next) {
    service.get().then((users) => res.json(users))
    .catch(next);
  }

  add(req, res, next) {
    service.add({
      name: req.body.name,
      pass: req.body.pass
    }).then((user) => res.json(user))
    .catch(next);
  }

  login(req, res, next){
    service.login({
      name: req.body.name,
      pass: req.body.pass
    }).then((user) => res.json(user))
    .catch(next);
  }

  getRouter() {
    return this.router;
  }

}
module.exports = UserWS;
