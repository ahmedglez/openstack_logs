"use strict";

function load() {
  var _require, copy_logs, _require2, insert_all, p1;

  return regeneratorRuntime.async(function load$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _require = require('../commands/copy_logs'), copy_logs = _require.copy_logs;
          _require2 = require('../utils/insert_all_log'), insert_all = _require2.insert_all;
          p1 = new Promise(function (res, rej) {}).then(insert_all());

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = {
  load: load
};