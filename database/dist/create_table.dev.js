"use strict";

var mongo = require('mongodb');

var url = 'mongodb://localhost:27017/';
var dbName = 'openstack_logs';
var client = new mongo.MongoClient(url + dbName, {
  useNewUrlParser: true
});
client.connect(function (err, db) {
  if (err) throw err;
  var dbase = db.db(dbName);
  dbase.createCollection('nova', function (err, res) {
    if (err) throw err;
    console.log('Collection created!');
    db.close();
  }), dbase.createCollection('neutron', function (err, res) {
    if (err) throw err;
    console.log('Collection created!');
    db.close();
  }), dbase.createCollection('keystone', function (err, res) {
    if (err) throw err;
    console.log('Collection created!');
    db.close();
  });
});