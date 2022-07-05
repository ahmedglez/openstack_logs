const insert_json_DB = (name) => {
    const mongo = require('mongodb')
    const MongoClient = require('mongodb').MongoClient
    const url = 'mongodb: // localhost: 27017 / openstack_logs_DB'
    const file = require('../jsons/nova.json')
    

    const file = require('../jsons/'+name+'.json')
    const f1 = file[25]
    const f2 = f1.logs.split(',')
    const fecha = f2[1].slice(0, 24)
    const info = f2[1].slice(24, f2[1].length)
    const ob = {
        id: f2[0],
        fecha: f3,
        info: f4
    }

    

    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err
        } else {
            console.log("Base de datos conectada!");
            const dbo = db.db("openstack_logs_DB")
            dbo.collection(name).insertOne(obj, function (err, res) {
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