const express = require('express');
const service = require('./StudentService');
class StudentWS{
    constructor(router) {
    this.router = express.Router()
                    .get('/student', this.getByMentor.bind(this));
  }

  getByMentor(req, res, next) {
    service.getByMentor(req.query.mentorId).then((messages) => res.json(messages))
    .catch(next);
  }

  getRouter() {
    return this.router;
  }
}

module.exports = StudentWS;