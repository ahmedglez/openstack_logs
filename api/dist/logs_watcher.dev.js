"use strict";

var watch = function watch() {
  var _require = require('child_process'),
      exec = _require.exec;

  var path = require('path');

  var filename = path.resolve('../api/logs_watcher.js');

  var _require2 = require('../functions/detect_changes'),
      detect_changes = _require2.detect_changes;

  detect_changes('nova');
  detect_changes('neutron');
  detect_changes('keystone');
  exec('nodemon ' + filename, function (err, stdout, stderr) {
    if (err) {
      console.error(err);
      return;
    }

    console.log(stdout);
  });
};

module.exports = {
  watch: watch
};