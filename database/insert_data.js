

const insert_json_DB = (name) => {
    const mongo = require('mongodb')
    const MongoClient = require('mongodb').MongoClient
    const url = 'mongodb: // localhost: 27017 / openstack_logs_DB'

    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err
        } else {
            console.log("Base de datos conectada!");
            const dbo = db.db("openstack_logs_DB")
            dbo.collection(name).insertOne({}, function (err, res) {
                if (err) {
                    throw err
                } else {
                    console.log("Documentos insertados en db")
                    db.close();
                }
            })
        }
    })
}

module.exports = {
    insert_json_DB
}