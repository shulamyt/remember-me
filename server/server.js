const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const UserWS = require('./user/UserWS');
const NotificationWS = require('./notification/NotificationWS');
const MessageWS = require('./message/MessageWS');

const userWS = new UserWS();
const messageWS = new MessageWS();
const notificationWS = new NotificationWS();

app.use(bodyParser.json());

app.use(userWS.getRouter());
app.use(messageWS.getRouter());
app.use(notificationWS.getRouter());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
