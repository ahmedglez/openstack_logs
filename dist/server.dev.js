"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var path = require('path'); //Set the public folder


app.use(express["static"]('./public')); //Allows us to parse POST data.

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); //MEAN apps use a catchall after any routes created by Node.

app.use('/app', express["static"]('./public'));
app.listen(1337);
console.log('Server started at ' + Date());