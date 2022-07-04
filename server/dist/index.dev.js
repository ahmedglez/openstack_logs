"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var path = require('path'); //Set the public folder


app.use(express["static"]('/public')); //Allows us to parse POST data.

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); //MEAN apps use a catchall after any routes created by Node.

app.get('*', function (req, res) {
  res.sendFile(path.resolve('../public/index.html'));
});
app.listen(1337);
console.log('Server started at ' + Date());