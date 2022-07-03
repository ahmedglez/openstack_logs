const copy_function = (name) => {

	const path = require('path')

    const exec = require('child_process').exec;
    var path1 = path.resolve('C:\\Users\\Ahmed\\Documents\\openstack_example_logs')
    var path2 = path.resolve('../logs')


    exec(
        'copy ' + name +' C:\\Users\\Ahmed\\Documents\\openstack_example_logs', {
            cwd: path2
        },
        function (err, stdout, stderr) {
            console.log(stdout);
            console.log(err.message)
            console.log(stderr)
        }
    );
};

module.exports = {
    copy_function
};