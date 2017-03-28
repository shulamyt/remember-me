const express = require('express');
const service = require('./UserService');
class UserWS {
  constructor(router) {
    this.router = express.Router()
                    .get('/user', this.get.bind(this))
                    .post('/user', this.add.bind(this))
                    .put('/user/login', this.login.bind(this));
  }

  get(req, res, next) {
    service.get().then((users) => res.json(users))
    .catch(next);
  }

  add(req, res, next) {
    service.add({
      name: req.body.name,
      password: req.body.password
    }).then((user) => res.json(user))
    .catch(next);
  }

  login(req, res, next){
    service.login({
      name: req.body.name,
      password: req.body.password
    }).then((user) => res.json(user))
    .catch(next);
  }

  getRouter() {
    return this.router;
  }

}
module.exports = UserWS;
