const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const UserWS = require('./user/UserWS');
const NotificationWS = require('./notification/NotificationWS');
const MessageWS = require('./message/MessageWS');
const StudentWS = require('./student/StudentWS');
const path = require('path');

const userWS = new UserWS();
const messageWS = new MessageWS();
const studentWS = new StudentWS();
const notificationWS = new NotificationWS();

app.use(express.static('/', path.resolve(__dirname + '/../client/dist'), {
  index: 'index.html'
}));


app.use(bodyParser.json());

app.use(userWS.getRouter());
app.use(messageWS.getRouter());
app.use(studentWS.getRouter());
app.use(notificationWS.getRouter());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
