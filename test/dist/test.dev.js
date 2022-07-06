"use strict";

var _require = require('../database/insert_data'),
    insert_json_DB = _require.insert_json_DB;

var _require2 = require('../functions/convert_to_json'),
    convert = _require2.convert; //crear promesa

/* const promesa = new Promise((resolve, reject) => {
    convert('neutron')
})
promesa.then(convert('keystone'))
promesa.then(convert('nova'))
promesa.then(insert_json_DB('neutron'))
promesa.then(insert_json_DB('keystone'))
promesa.then(insert_json_DB('nova'))
promesa.catch(err => console.log(err)); */


function convert_jsons() {
  convert('nova');
  convert('neutron');
  convert('keystone');
}

function insert_jsons() {
  insert_json_DB('nova');
  insert_json_DB('neutron');
  insert_json_DB('keystone');
}

function main() {
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          convert_jsons();
          _context.next = 3;
          return regeneratorRuntime.awrap(setTimeout(function () {
            insert_jsons();
          }, 1000));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

main();