const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/../public'), {maxAge: '1y'}));
app.use('/:id', express.static(path.join(__dirname, '/../public'), {maxAge: '1y'}));

module.exports = app;
