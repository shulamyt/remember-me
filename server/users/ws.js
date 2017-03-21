const express = require('express');
const service = require('./service');
class UsersWS {
  constructor(router) {
    this.router = express.Router()
                    .get('/users', this.get.bind(this))
                    .post('/users', this.add.bind(this));
  }

  get(req, res) {
    service.get().then((users) => res.json(users));
  }

  add(req, res) {
    service.add({
      name: req.body.name,
      pass: req.body.pass
    }).then((user) => res.json(user));
  }

  getRouter() {
    return this.router;
  }

}
module.exports = UsersWS;
