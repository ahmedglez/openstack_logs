const watch = () => {
    const {
        exec
    } = require('child_process');
    const path = require('path');
    const filename = path.resolve('../api/logs_watcher.js');
    const {
        detect_changes
    } = require('../functions/detect_changes')
    detect_changes('nova')
    detect_changes('neutron')
    detect_changes('keystone')

    exec('nodemon ' + filename, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}


module.exports = {
    watch
}