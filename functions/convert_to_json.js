const path = require('path');

const convert = (name) => {

	const {
		compare
	} = require('./compare_json');
	const fs = require('fs')
	const bit1 = fs.readFile('../logs/' + name + '.log', 'utf-8', async (err, data) => {
			if (err) {
				console.log('error:', err);
			} else {
				const splitData = data.split('\n');
				const StringArray = Object.entries(splitData)
				var jsonArray = StringArray.map(item => {
					const splitItem = item[1].split(' ')
					const fecha = splitItem[0]
					const hora = splitItem[1]
					const nivel = splitItem[2]
					const mensaje = splitItem[3]
					const log = splitItem.slice(4, splitItem.length).toString()
					return {
						id: nivel,
						fecha: fecha,
						hora: hora,
						mensaje: mensaje,
						log: log
					}
				})
				jsonArray = jsonArray.sort((a, b) => {
					return parseInt(a.id) - parseInt(b.id)
				})
				const json = JSON.stringify(jsonArray, null, 2)				
				compare(json, name)


			}
		}

	)
}



module.exports = {
	convert
}