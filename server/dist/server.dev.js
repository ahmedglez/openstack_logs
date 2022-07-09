"use strict";

var express = require('express');

var app = express();
var date = new Date();

var bodyParser = require('body-parser');

var path = require('path');

var _require = require('../api/logs_watcher'),
    watch = _require.watch;

watch();

var _require2 = require('../api/load_json'),
    load = _require2.load;

app.use(express["static"]('../public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/app', express["static"]('../public/'));
app.use('/compute', function (req, res) {
  setTimeout(function () {
    res.sendFile(path.resolve('../jsons/nova' + '.json'));
  }, 500);
});
app.use('/network', function (req, res) {
  setTimeout(function () {
    res.sendFile(path.resolve('../jsons/neutron' + '.json'));
  }, 500);
});
app.use('/identity', function (req, res) {
  setTimeout(function () {
    res.sendFile(path.resolve('../jsons/keystone' + '.json'));
  }, 1000);
});
app.listen(1337);
console.log('Server started at ' + Date());