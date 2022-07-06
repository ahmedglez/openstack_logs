const path = require('path');

const convert = (name) => {

	const date = new Date()
	const fs = require('fs')
	const bit1 = fs.readFile('../logs/' + name + '.log', 'utf-8', async (err, data) => {
		if (err) {
			console.log('error:', err);
		} else {
			const splitData = data.split('\n');
			const StringArray = Object.entries(splitData)
			const jsonArray = StringArray.map(item => {
				const splitItem = item[1].split(' ')
				const fecha = splitItem[0]
				const hora = splitItem[1]
				const nivel = splitItem[2]
				const mensaje = splitItem[3]
				const log = splitItem.slice(4, splitItem.length).toString()
				return {
					fecha: fecha,
					hora: hora,
					nivel: nivel,
					mensaje: mensaje,
					log: log
				}
			})
			const json = JSON.stringify(jsonArray)
			const fileName = name + '_' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '.json'
			console.log(fileName);
			const filePath = path.join('../jsons/', fileName)
			console.log(filePath);
			fs.writeFile(filePath, json, (err) => {
				if (err) {
					console.log('error:', err);
				} else {
					console.log('Json guarado correctamente!');
				}
			})
		}
	})
}


module.exports = {
	convert
};