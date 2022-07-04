const path = require('path');

const insert = (table_name, info) => {


	const {
		connect
	} = require('../connection/database_connection');

	const client = connect();
	const date = new Date();
	const fs = require('fs')
	const bit1 = fs.readFile('../logs/' + table_name + '.log', 'utf-8', async (err, data) => {
		if (err) {
			console.log('error:', err);
		} else {
			const splitData = data.split('CEF:0|');
			const LastTen = splitData.slice(splitData.length - 10)
			const StringArray = Object.entries(LastTen)
			const result = StringArray.map((item, index) => {
				return {
					"id": data.length - (10 - index),
					"log": item.toString()
				}
			})
			const jsonResult = JSON.stringify(result)
			const JsonRoute = '../jsons/' + table_name + '.json'
			fs.writeFile(path.resolve(JsonRoute), jsonResult, (err) => {
				if (err)
					console.log(err.message);
				else {
					console.log("File written successfully\n");
					console.log("The written has the following contents:");
				}
			})

			const text = 'INSERT INTO public.' + table_name + '(date, info, log) VALUES($1, $2, $3) RETURNING *'
			const values = [date.toLocaleDateString().toString(), info, jsonResult.toString()]
			// callback
			await client.query(text, values, (err, res) => {
				if (err) {
					console.log(err.stack)
				} else {}
			})
		}
	})


};

module.exports = {
	insert
};