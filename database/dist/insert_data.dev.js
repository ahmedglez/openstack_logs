"use strict";

var insert_json_DB = function insert_json_DB(name) {
  var file = require('../jsons/' + name + '.json');

  var f1 = file[25];
  var f2 = f1.logs.split(',');
  var fecha = f2[1].slice(0, 24);
  var info = f2[1].slice(24, f2[1].length);
  var ob = {
    id: f2[0],
    fecha: f3,
    info: f4
  };
};

module.exports = {
  insert_json_DB: insert_json_DB
};