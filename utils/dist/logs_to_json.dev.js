"use strict";

var path = require('path');

var insert_logs = function insert_logs(table_name, info) {
  var date = new Date();

  var fs = require('fs');

  var bit1 = fs.readFile('../logs/' + table_name + '.log', 'utf-8', function _callee(err, data) {
    var splitData, StringArray, result, jsonResult, JsonRoute;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (err) {
              console.log('error:', err);
            } else {
              splitData = data.split('\n');
              StringArray = Object.entries(splitData);
              console.log("Log", StringArray);
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
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  });
};

module.exports = {
  insert_logs: insert_logs
};