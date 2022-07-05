const {
	rejects
} = require('assert');
const {
	error
} = require('console');
const {
	response
} = require('express');
const {
	resolve
} = require('path');

const copy_logs = (name) => {
	const exec = require('child_process').exec;
	const path = require('path')
	var localPath = path.resolve('/home/ahmed/openstack_logs/logs/')
	var absolutePath = path.resolve('/var/snap/microstack/common/log/')
	const command = 'tail -100 ' + absolutePath + '/' + name + '.log' + ' | tee ' + localPath + name + '.log'
	console.log(command)
	const p1 = new Promise(resolve, rejects, () => {
			exec('rm ' + name + '.log')
		})
		.then(exec(command,
			function (err, stdout, stderr) {
				console.log(stdout);
				console.log(err)
				console.log(stderr)
			}
		)).then(console.log(name + '.log copiado exitosamente')).catch(error => console.log(error))

}
module.exports = {
	copy_logs
};