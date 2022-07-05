const insert_json_DB = (name) => {
    

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

    

}

module.exports = {
    insert_json_DB
}