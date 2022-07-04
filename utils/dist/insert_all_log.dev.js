"use strict";

function insert_all() {
  var _require = require('../utils/logs_to_json'),
      insert_logs = _require.insert_logs;

  var p1 = new Promise(function (res, rej) {
    insert_logs('glance', 'glance_info');
  }).then(insert_logs('glance', 'glance_info')).then(insert_logs('keystone', 'keystone_info')).then(insert_logs('neutron', 'neutron_info')).then(insert_logs('nova', 'nova_info'));
}

module.exports = {
  insert_all: insert_all
};