const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const UserWS = require('./user/UserWS');
const NotificationWS = require('./notification/NotificationWS');
app.use(bodyParser.json());

const userWS = new UserWS();
app.use(userWS.getRouter());

const notificationWS = new NotificationWS();
app.use(notificationWS.getRouter());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
