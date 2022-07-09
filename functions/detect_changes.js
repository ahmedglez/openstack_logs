const detect_changes = (name) => {

    const {load} = require('../api/load_json')
    var fs = require('fs');
    var path = require('path');
    var file = path.resolve('../logs/' + name + '.log');
    console.log(file);
    var watcher = fs.watchFile(file, function (event, filename) {
        console.log('event: ' + event);
        console.log('Cambios hechos en ' + filename);
        if (filename) {
            console.log('filename: ' + filename);
        } else {
            console.log('filename: ' + file);
        }
    });
    watcher.on('change', function (event, filename) {
        console.log('event: ' + event);
        console.log('Cambios hechos en ' + filename);
        load(name)
        if (filename) {
            console.log('filename: ' + filename);
        } else {
            console.log('filename: ' + file);
        }
    });
    watcher.on('error', function (err) {
        console.log('error: ' + err);
    });
    watcher.on('close', function () {
        console.log('close');
    });
    watcher.on('ready', function () {
        console.log('ready');
    });
    watcher.on('rename', function (oldName, newName) {
        console.log('rename');
        console.log('oldName: ' + oldName);
        console.log('newName: ' + newName);
    });
    watcher.on('delete', function (filePath) {
        console.log('delete');
        console.log('filePath: ' + filePath);
    });
    watcher.on('add', function (filePath) {
        console.log('add');
        console.log('filePath: ' + filePath);
    });
    watcher.on('change', function (filePath) {
        console.log('change');
        console.log('filePath: ' + filePath);
    });
    watcher.on('unlink', function (filePath) {
        console.log('unlink');
        console.log('filePath: ' + filePath);
    });
    watcher.on('moved', function (oldName, newName) {
        console.log('moved');
        console.log('oldName: ' + oldName);
        console.log('newName: ' + newName);
    });





}


module.exports = {detect_changes}