async function load(name) {
    const {
        copy_logs
    } = require('../commands/copy_logs')
    const {
        convert
    } = require('../functions/convert_to_json')
    const {
        insert_json_DB
    } = require('../database/insert_data')

    convert(name)
    insert_json_DB(name)
}

module.exports = {
    load
}