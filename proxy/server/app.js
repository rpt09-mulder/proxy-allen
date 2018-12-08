const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/rooms/:id', (req, res) => {
  res.send('you hit roomID', req.params.id)
});

module.exports = app;
