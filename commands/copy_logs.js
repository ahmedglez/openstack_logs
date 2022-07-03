const copy_logs = () => {
	const exec = require('child_process').exec;
	const path = require('path')
	var absolutePath = path.resolve('C:\\Users\\Ahmed\\Documents\\openstack_example_logs')
	var absolutePath2 = path.resolve('../logs')

	exec(
		'copy nova.log ' + absolutePath2, {
			cwd: absolutePath
		},
		function (err, stdout, stderr) {
			console.log(stdout);
			console.log(err)
			console.log(stderr)
		}
	);
	exec(
		'copy neutron.log ' + absolutePath2, {
			cwd: absolutePath
		},
		function (err, stdout, stderr) {
			console.log(stdout);
			console.log(err)
			console.log(stderr)
		}
	);
	exec(
		'copy keystone.log ' + absolutePath2, {
			cwd: absolutePath
		},
		function (err, stdout, stderr) {
			console.log(stdout);
			console.log(err)
			console.log(stderr)
		}
	);
	exec(
		'copy glance.log ' + absolutePath2, {
			cwd: absolutePath
		},
		function (err, stdout, stderr) {
			console.log(stdout);
			console.log(err)
			console.log(stderr)
		}
	);
	exec(
		'copy horizon.log ' + absolutePath2, {
			cwd: absolutePath
		},
		function (err, stdout, stderr) {
			console.log(stdout);
			console.log(err)
			console.log(stderr)
		}
	);
};

module.exports = {
	copy_logs
};