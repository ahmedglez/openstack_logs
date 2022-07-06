"use strict";

function load(name) {
  var _require, copy_logs, _require2, convert, _require3, insert_json_DB;

  return regeneratorRuntime.async(function load$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _require = require('../commands/copy_logs'), copy_logs = _require.copy_logs;
          _require2 = require('../functions/convert_to_json'), convert = _require2.convert;
          _require3 = require('../database/insert_data'), insert_json_DB = _require3.insert_json_DB;
          convert(name);
          insert_json_DB(name);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = {
  load: load
};