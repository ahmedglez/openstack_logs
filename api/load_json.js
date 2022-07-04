async function load(){
    const {
        copy_logs
    } = require('../commands/copy_logs')
    const {
        insert_all
    } =  require('../utils/insert_all_log')



    const p1 = new Promise(function(res, rej){
        
    })
     .then(insert_all())
    
}

module.exports = {load}