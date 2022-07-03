//

const remove_logs = () => {
	const { exec } = require('child_process');

	exec('cd E:Escuela\3erAñoLinea_de_Investigaciondevlogs_backuplogs');
	exec('rm *.log*');
};

module.exports = { remove_logs };
