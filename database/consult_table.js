const insert_data = (table_name) => {

    const {connect} = require('../connection/database_connection')
    const client = connect();    
	const date = new Date();

	client
		.query(
			`SELECT * FROM ${table_name}`
		)
		.then((response) => {
			console.log(response.rows);
			console.log(response);
			client.end();
		})

		.catch((err) => {
			client.end();
		});
	

    }

    module.exports = { insert_data }