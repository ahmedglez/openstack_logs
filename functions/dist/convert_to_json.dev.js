"use strict";

var path = require('path');

var convert = function convert(name) {
  var _require = require('./compare_json'),
      compare = _require.compare;

  var fs = require('fs');

  var bit1 = fs.readFile('../logs/' + name + '.log', 'utf-8', function _callee(err, data) {
    var splitData, StringArray, jsonArray, json;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (err) {
              console.log('error:', err);
            } else {
              splitData = data.split('\n');
              StringArray = Object.entries(splitData);
              jsonArray = StringArray.map(function (item) {
                var splitItem = item[1].split(' ');
                var fecha = splitItem[0];
                var hora = splitItem[1];
                var nivel = splitItem[2];
                var mensaje = splitItem[3];
                var log = splitItem.slice(4, splitItem.length).toString();
                return {
                  id: nivel,
                  fecha: fecha,
                  hora: hora,
                  mensaje: mensaje,
                  log: log
                };
              });
              jsonArray = jsonArray.sort(function (a, b) {
                return parseInt(a.id) - parseInt(b.id);
              });
              json = JSON.stringify(jsonArray, null, 2);
              compare(json, name);
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
  convert: convert
};