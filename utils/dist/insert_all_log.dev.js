"use strict";

var insert_all = function insert_all() {
  var _require = require('../database/insert_data'),
      insert = _require.insert;

  insert('glance', 'glance_info');
  insert('horizon', 'horizon_info');
  insert('keystone', 'keystone_info');
  insert('neutron', 'neutron_info');
  insert('nova', 'nova_info');
};

module.exports = {
  insert_all: insert_all
};