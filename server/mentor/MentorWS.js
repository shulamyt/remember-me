const express = require('express');
const service = require('./MentorService');
class MentorWS{
    constructor(router) {
    this.router = express.Router()
                    .get('/mentor', this.getMentor.bind(this));
  }

  getMentor(req, res, next) {
    service.getMentor(req.query.mentorId).then((messages) => res.json(messages))
    .catch(next);
  }

  getRouter() {
    return this.router;
  }
}

module.exports = MentorWS;