"use strict";

var insert_json_DB = function insert_json_DB(name) {
  var MongoClient = require('mongodb').MongoClient;

  var assert = require('assert');

  var url = 'mongodb://localhost:27017';
  var dbName = 'openstack_logs';
  var date = new Date();
  var client = new MongoClient(url, {
    useNewUrlParser: true
  });
  client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    var db = client.db(dbName);
    var collection = db.collection(name);

    var fs = require('fs');

    var path = require('path');

    var fileName = name + '.json';
    var filePath = path.join('../jsons/', fileName);
    console.log("FILEPATH", filePath);
    fs.readFile(filePath, 'utf-8', function (err, data) {
      if (err) throw err;
      var json = JSON.parse(data);
      collection.insertMany(json, function (err, result) {
        assert.equal(err, null);
        console.log("Inserted 3 documents into the collection");
        client.close();
      });
    });
  }, function (err) {
    console.log(err);
  });
};

module.exports = {
  insert_json_DB: insert_json_DB
};