"use strict";

var insert_json_DB = function insert_json_DB(name) {
  var mongo = require('mongodb');

  var MongoClient = require('mongodb').MongoClient;

  var url = 'mongodb: // localhost: 27017 / openstack_logs_DB';

  var file = require('../jsons/nova.json');

  var f1 = file[25];
  var f2 = f1.logs.split(',');
  var f3 = f2[1].slice(0, 24);
  var f4 = f2[1].slice(24, f2[1].length);
  console.log(f4);
  MongoClient.connect(url, function (err, db) {
    if (err) {
      throw err;
    } else {
      console.log("Base de datos conectada!");
      var dbo = db.db("openstack_logs_DB");
      dbo.collection(name).insertOne({}, function (err, res) {
        if (err) {
          throw err;
        } else {
          console.log("Documentos insertados en db");
          db.close();
        }
      });
    }
  });
};

module.exports = {
  insert_json_DB: insert_json_DB
};