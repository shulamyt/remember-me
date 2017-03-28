const express = require('express');
const service = require('./MessageService');
class MessageWS {
  constructor(router) {
    this.router = express.Router()
                    .get('/message', this.getByStudent.bind(this))
                    .post('/message', this.add.bind(this))
                    .put('/message', this.update.bind(this))
                    .delete('/message/:message_id', this.delete.bind(this));
  }

  getByStudent(req, res, next) {
    service.getByStudent(req.query.studentId).then((messages) => res.json(messages))
    .catch(next);
  }

  add(req, res, next) {
    service.add({
      message: req.body.message,
      userid: req.body.userid
    }).then((message) => res.json(message))
    .catch(next);
  }

  update(req, res, next) {
    service.update({
      message: req.body.message,
      messageid: req.body.messageid
    }).then((message) => res.json(message))
    .catch(next);
  }

  delete(req, res, next) {
    service.delete(req.params.message_id).then((user) => res.json(user))
    .catch(next);
  }

  getRouter() {
    return this.router;
  }

}
module.exports = MessageWS;
