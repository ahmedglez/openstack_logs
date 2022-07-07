"use strict";

var compare = function compare(json, name) {
  var fs = require('fs');

  var path = require('path');

  var fileName = name + '.json';
  var filePath = path.join('../jsons/', fileName);

  try {
    var file = fs.readFileSync(filePath, 'utf-8');
    var json_old = JSON.parse(file);
    var json_new = JSON.parse(json);
    var diff = json_new.filter(function (item) {
      return !json_old.some(function (item_old) {
        return item_old.id === item.id;
      });
    });
    console.log(diff);
    fs.unlink(filePath, function (err) {
      if (err) throw err;
      console.log('successfully deleted ' + fileName);
    });
    fs.writeFile(filePath, diff, function (err) {
      if (err) {
        console.log('error:', err);
      } else {
        console.log('Json guarado correctamente!');
      }
    });
  } catch (error) {
    fs.writeFile(filePath, json, function (err) {
      if (err) {
        console.log('error:', err);
      } else {
        console.log('Json guarado correctamente!');
      }
    });
  }
};

module.exports = {
  compare: compare
};