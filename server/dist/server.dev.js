"use strict";

var express = require('express');

var app = express();
var date = new Date();

var bodyParser = require('body-parser');

var path = require('path');

var _require = require('../api/load_json'),
    load = _require.load;

app.use(express["static"]('../public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/app', express["static"]('../public/'));
app.use('/compute', function (req, res) {
  load('nova').then(function () {
    setTimeout(function () {
      res.sendFile(path.resolve('../jsons/nova' + '.json'));
    }, 1000);
  })["catch"](function (err) {
    console.log(err);
  });
});
app.use('/network', function (req, res) {
  load('neutron').then(function () {
    setTimeout(function () {
      res.sendFile(path.resolve('../jsons/neutron' + '.json'));
    }, 1000);
  })["catch"](function (err) {
    console.log(err);
  });
});
app.use('/identity', function (req, res) {
  load('keystone').then(function () {
    setTimeout(function () {
      res.sendFile(path.resolve('../jsons/keystone' + '.json'));
    }, 1000);
  })["catch"](function (err) {
    console.log(err);
  });
});
app.listen(1337);
console.log('Server started at ' + Date());