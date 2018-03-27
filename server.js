#!/usr/bin/env node
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// everything happens here:
const routes = require('./routes.js')(app);

const server = app.listen(3000, function () {
  console.log('Your KKT is ready at port %s...', server.address().port);
});
