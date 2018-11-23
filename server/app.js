require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 8080;

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
    res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.use(session({
    secret: '#!#!#SESSIONID#!#!#',
    resave: false,
    saveUninitialized: true
}));   

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.method + " " + req.url)
  next()
});

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/BISC", {useNewUrlParser: true})
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));

app.use('/accounts', require('./routes/accounts'));
app.use('/events', require('./routes/events'));
app.use('/jadmin', require('./routes/jadmin'));
app.use('/admin', require('./routes/admin'));

app.listen(port, () => console.log(`Server listening on port ${port}`));
