const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const UserWS = require('./user/UserWS');
app.use(bodyParser.json());

const userWS = new UserWS();
app.use(userWS.getRouter());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
