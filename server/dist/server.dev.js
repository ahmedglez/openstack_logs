"use strict";

var express = require('express');

var app = express();

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
app.use('/load', function (req, res) {
  load();
});
app.get("/glance", function (req, res) {
  res.sendFile(path.resolve('../jsons/glance.json'));
});
app.get("/horizon", function (req, res) {
  res.sendFile(path.resolve('../jsons/horizon.json'));
});
app.get("/keystone", function (req, res) {
  res.sendFile(path.resolve('../jsons/keystone.json'));
});
app.get("/neutron", function (req, res) {
  res.sendFile(path.resolve('../jsons/neutron.json'));
});
app.get("/nova", function (req, res) {
  res.sendFile(path.resolve('../jsons/nova.json'));
});
app.listen(1337);
console.log('Server started at ' + Date());