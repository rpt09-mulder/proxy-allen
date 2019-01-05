const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/../public'), {maxAge: 31536000}));
app.use('/:id', express.static(path.join(__dirname, '/../public'), {maxAge: 31536000}));

module.exports = app;
