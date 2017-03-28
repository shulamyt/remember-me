const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const UserWS = require('./user/UserWS');
const MessageWS = require('./message/MessageWS');
app.use(bodyParser.json());

const userWS = new UserWS();
const messageWS = new MessageWS();
app.use(userWS.getRouter());
app.use(messageWS.getRouter());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
