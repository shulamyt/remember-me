const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const UsersWS = require('./users/ws');
app.use(bodyParser.json());

const usersWS = new UsersWS();
app.use(usersWS.getRouter());

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
