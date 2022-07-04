function insert_all(){

const {insert_logs} = require('../utils/logs_to_json')

const p1 = new Promise(function (res, rej){
insert_logs('glance','glance_info')
})
.then(insert_logs('glance', 'glance_info'))
.then(insert_logs('keystone', 'keystone_info'))
.then(insert_logs('neutron', 'neutron_info'))
.then(insert_logs('nova', 'nova_info'))


}
module.exports = {insert_all}