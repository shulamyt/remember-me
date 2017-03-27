const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const UsersWS = require('./users/ws');
app.use(bodyParser.json());

const usersWS = new UsersWS();
app.use(usersWS.getRouter());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
