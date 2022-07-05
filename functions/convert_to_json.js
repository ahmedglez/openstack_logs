const path = require('path');

const convert = (name) => {


	const fs = require('fs')
	const bit1 = fs.readFile('../logs/' + name + '.log', 'utf-8', async (err, data) => {
		if (err) {
			console.log('error:', err);
		} else {
			const splitData = data.split('\n');
			const StringArray = Object.entries(splitData)
			console.log("Log", StringArray)
			const result = StringArray.map((item, index) => {
				return {
					"date": fecha.toLocaleDateString().toString() + " " + fecha.toLocaleTimeString().toString(),
					"logs": item.toString()
				}
			})
			const jsonResult = JSON.stringify(result)
			const JsonRoute = '../jsons/' + name + '.json'
			console.log(JsonRoute)
			fs.writeFile(path.resolve(JsonRoute), jsonResult, (err) => {
				if (err)
					console.log(err.message);
				else {
					console.log("File written successfully\n");
					console.log("The written has the following contents:");
				}
			})
		}
	})


};

module.exports = {
	convert
};