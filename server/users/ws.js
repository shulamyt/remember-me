const express = require('express');
const service = require('./service');
class UsersWS xfsfsdfdf FAIL JENKINS TEST {
  constructor(router) {
    this.router = express.Router()
                    .get('/users', this.get.bind(this))
                    .post('/users', this.add.bind(this));
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

  getRouter() {
    return this.router;
  }

}
module.exports = UsersWS;
