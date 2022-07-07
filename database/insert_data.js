const insert_json_DB = (name) => {

    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');
    const url = 'mongodb://localhost:27017';
    const dbName = 'openstack_logs';
    const date = new Date()
    const client = new MongoClient(url, {
        useNewUrlParser: true
    });
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        const collection = db.collection(name);
        const fs = require('fs');
        const path = require('path');
        const fileName = name +'.json';
        const filePath = path.join('../jsons/', fileName);
        console.log("FILEPATH",filePath);
        fs.readFile(filePath, 'utf-8', function (err, data) {
            if (err) throw err;
            const json = JSON.parse(data);
            collection.insertMany(json, function (err, result) {
                assert.equal(err, null);
                console.log("Inserted 3 documents into the collection");
                client.close();
            });
        });
    }, function (err) {
        console.log(err);
    });


}

module.exports = {insert_json_DB}