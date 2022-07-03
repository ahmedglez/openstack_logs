"use strict";

var fs = require('fs');

var bit1 = fs.readFile('../logs/neutron.log', 'utf-8', function (err, data) {
  if (err) {
    console.log('error:', err);
  } else {
    console.log(data);
  }
});
console.log(bit1);