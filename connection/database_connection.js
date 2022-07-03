const connect = () => {
	
	const { Client } = require('pg');


	const client = new Client({
		user: 'postgres',
		host: 'localhost',
		database: 'openstack_logs',
		password: '1234',
		port: 5439,
	});
	client.connect(function (err) {
		if (err) throw err;
		console.log('Connected!');
	});



	return client;
};

module.exports = { connect };

/*   
  client
    .query('SELECT * FROM glance')
    .then((response) => {
      console.log(response.rows);
      client.end();
    })
    .catch((err) => {
      client.end();
    }); */

/* INSERT INTO public.glance(
      id, date, info, log)
      VALUES (?, ?, ?, ?); */
