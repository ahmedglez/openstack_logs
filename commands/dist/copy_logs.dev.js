"use strict";

var _require = require('assert'),
    rejects = _require.rejects;

var _require2 = require('console'),
    error = _require2.error;

var _require3 = require('express'),
    response = _require3.response;

var _require4 = require('path'),
    resolve = _require4.resolve;

var copy_logs = function copy_logs(name) {
  var exec = require('child_process').exec;

  var path = require('path');

  var localPath = path.resolve('/home/ahmed/openstack_logs/logs/');
  var absolutePath = path.resolve('/var/snap/microstack/common/log/');
  var command = 'tail -100 ' + absolutePath + '/' + name + '.log' + ' | tee ' + localPath + '/' + name + '.log';
  console.log(command);
  var p1 = new Promise(resolve, rejects, function () {
    exec('rm ' + name + '.log');
  }).then(exec(command, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(err);
    console.log(stderr);
  })).then(console.log(name + '.log copiado exitosamente'))["catch"](function (error) {
    return console.log(error);
  });
};

module.exports = {
  copy_logs: copy_logs
};