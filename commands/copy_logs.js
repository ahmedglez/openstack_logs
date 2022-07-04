const copy_logs = () => {
	const exec = require('child_process').exec;
	const path = require('path')
	var absolutePath = path.resolve('/var/snap/microstack/common/log/')

	exec(
		'tail nova.log ' + absolutePath + 'nova.log', {
			
		},
		function (err, stdout, stderr) {
			console.log(stdout);
			console.log(err)
			console.log(stderr)
		}
	);
	exec(
		'tail neutron.log ' + absolutePath + 'neutron.log', {
			
		},
		function (err, stdout, stderr) {
			console.log(stdout);
			console.log(err)
			console.log(stderr)
		}
	);
	exec(
		'tail keystone.log ' + absolutePath + 'keystone.log', {
			
		},
		function (err, stdout, stderr) {
			console.log(stdout);
			console.log(err)
			console.log(stderr)
		}
	);
	exec(
		'tail glance.log ' + absolutePath + 'glance.log', {
			
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