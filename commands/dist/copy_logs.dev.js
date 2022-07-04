"use strict";

var copy_logs = function copy_logs() {
  var exec = require('child_process').exec;

  var path = require('path');

  var absolutePath = path.resolve('/var/snap/microstack/common/log');
  var absolutePath2 = path.resolve('../logs');
  exec('tail nova.log ' + absolutePath2, {
    cwd: absolutePath
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(err);
    console.log(stderr);
  });
  exec('tail neutron.log ' + absolutePath2, {
    cwd: absolutePath
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(err);
    console.log(stderr);
  });
  exec('tail keystone.log ' + absolutePath2, {
    cwd: absolutePath
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(err);
    console.log(stderr);
  });
  exec('tail glance.log ' + absolutePath2, {
    cwd: absolutePath
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(err);
    console.log(stderr);
  });
};

module.exports = {
  copy_logs: copy_logs
};