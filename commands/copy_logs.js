const copy_logs = (name) => {
	const exec = require('child_process').exec;
	const path = require('path')
	var localPath = path.resolve('/home/ahmed/openstack_logs/logs/')
	var absolutePath = path.resolve('/var/snap/microstack/common/log/')

	const p1 = new Promise(req, res, () => {
			exec('rm ' + name + '.log')
		})
		.then(exec('tail -100 ' + absolutePath + name + '.log' + ' | tee ' + localPath + name + '.log',
			function (err, stdout, stderr) {
				console.log(stdout);
				console.log(err)
				console.log(stderr)
			}
		)).then(console.log(name + '.log copiado exitosamente'))

}
module.exports = {
	copy_logs
};