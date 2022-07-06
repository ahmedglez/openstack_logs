const mongo = require('mongodb');
const url = 'mongodb://localhost:27017/';
const dbName = 'openstack_logs';
const client = new mongo.MongoClient(url + dbName, {
  useNewUrlParser: true
});
client.connect((err, db) => {
  if (err) throw err;
  const dbase = db.db(dbName);
  dbase.createCollection('nova', (err, res) => {
    if (err) throw err;
    console.log('Collection created!');
    db.close();
  }), dbase.createCollection('neutron', (err, res) => {
    if (err) throw err;
    console.log('Collection created!');
    db.close();
  }), dbase.createCollection('keystone', (err, res) => {
    if (err) throw err;
    console.log('Collection created!');
    db.close();
  })

})