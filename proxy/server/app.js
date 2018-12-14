const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../public')));
app.use('/:id', express.static(path.join(__dirname, '/../public')));

// app.get('/rooms/:id', (req, res) => {
  // res.send(`you hit roomID ${req.params.id}`);
  // let {id} = req.params;
  // axios.get(`http://localhost:3001/${req.url}`)
  //   .then((axiosresponse) => {
  //     console.log('axios res', axiosresponse.data);
  //     res.send(axiosresponse.data);
  //   });
// });

module.exports = app;
