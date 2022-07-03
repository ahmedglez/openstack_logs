"use strict";

var path = require('path');

var insert_data = function insert_data(table_name, info) {
  var _require = require('../connection/database_connection'),
      connect = _require.connect;

  var client = connect();
  var date = new Date();

  var fs = require('fs');

  var bit1 = fs.readFile('../logs/' + table_name + '.log', 'utf-8', function (err, data) {
    if (err) {
      console.log('error:', err);
    } else {
      var splitData = data.split('CEF:0|');
      var LastTen = splitData.slice(splitData.length - 10);
      var StringArray = Object.entries(LastTen);
      var result = StringArray.map(function (item, index) {
        return {
          "id": data.length - (10 - index),
          "log": item.toString()
        };
      });
      var jsonResult = JSON.stringify(result);
      var JsonRoute = '../jsons/' + table_name + '.json';
      fs.writeFile(path.resolve(JsonRoute), jsonResult, function (err) {
        if (err) console.log(err.message);else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("books.txt", "utf8"));
        }
      });
      var text = 'INSERT INTO public.' + table_name + '(date, info, log) VALUES($1, $2, $3) RETURNING *';
      var values = [date.toLocaleDateString().toString(), info, jsonResult.toString()]; // callback

      client.query(text, values, function (err, res) {
        if (err) {
          console.log(err.stack);
        } else {}
      });
    }
  });
};

module.exports = {
  insert_data: insert_data
};