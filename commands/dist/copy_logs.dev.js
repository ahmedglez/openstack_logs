"use strict";

var copy_logs = function copy_logs() {
  var exec = require('child_process').exec;

  var _require = require('../utils/copy_function'),
      copy_function = _require.copy_function;

  copy_function('nova.log');
  copy_function('glance.log');
  copy_function('horizon.log');
  copy_function('keystone.log');
  copy_function('neutron.log');
};

module.exports = {
  copy_logs: copy_logs
};