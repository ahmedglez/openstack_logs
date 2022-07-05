"use strict";

var _require = require('assert'),
    rejects = _require.rejects;

var _require2 = require('express'),
    response = _require2.response;

var _require3 = require('path'),
    resolve = _require3.resolve;

var copy_logs = function copy_logs(name) {
  var exec = require('child_process').exec;

  var path = require('path');

  var localPath = path.resolve('/home/ahmed/openstack_logs/logs/');
  var absolutePath = path.resolve('/var/snap/microstack/common/log/');
  var p1 = new Promise(resolve, rejects, function () {
    exec('rm ' + name + '.log');
  }).then(exec('tail -100 ' + absolutePath + name + '.log' + ' | tee ' + localPath + name + '.log', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(err);
    console.log(stderr);
  })).then(console.log(name + '.log copiado exitosamente'));
};

module.exports = {
  copy_logs: copy_logs
};