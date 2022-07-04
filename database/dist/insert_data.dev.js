"use strict";

var path = require('path');

var insert = function insert(table_name, info) {
  var _require = require('../connection/database_connection'),
      connect = _require.connect;

  var client = connect();
  var date = new Date();

  var fs = require('fs');

  var bit1 = fs.readFile('../logs/' + table_name + '.log', 'utf-8', function _callee(err, data) {
    var splitData, LastTen, StringArray, result, jsonResult, JsonRoute, text, values;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!err) {
              _context.next = 4;
              break;
            }

            console.log('error:', err);
            _context.next = 15;
            break;

          case 4:
            splitData = data.split('CEF:0|');
            LastTen = splitData.slice(splitData.length - 10);
            StringArray = Object.entries(LastTen);
            result = StringArray.map(function (item, index) {
              return {
                "id": data.length - (10 - index),
                "log": item.toString()
              };
            });
            jsonResult = JSON.stringify(result);
            JsonRoute = '../jsons/' + table_name + '.json';
            fs.writeFile(path.resolve(JsonRoute), jsonResult, function (err) {
              if (err) console.log(err.message);else {
                console.log("File written successfully\n");
                console.log("The written has the following contents:");
              }
            });
            text = 'INSERT INTO public.' + table_name + '(date, info, log) VALUES($1, $2, $3) RETURNING *';
            values = [date.toLocaleDateString().toString(), info, jsonResult.toString()]; // callback

            _context.next = 15;
            return regeneratorRuntime.awrap(client.query(text, values, function (err, res) {
              if (err) {
                console.log(err.stack);
              } else {}
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    });
  });
};

module.exports = {
  insert: insert
};