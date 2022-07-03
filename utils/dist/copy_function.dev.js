"use strict";

var copy_function = function copy_function(name) {
  var path = require('path');

  var exec = require('child_process').exec;

  var path1 = path.resolve("C:\\Users\\Ahmed\\Documents\\openstack_example_logs");
  var path2 = path.resolve('../logs');
  exec('copy ' + name + " C:\\Users\\Ahmed\\Documents\\openstack_example_logs", {
    cwd: path2
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(err.message);
    console.log(stderr);
  });
};

module.exports = {
  copy_function: copy_function
};