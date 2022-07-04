const insert_all = () => {

const {insert} = require('../database/insert_data')
insert('glance','glance_info')
insert('horizon','horizon_info')
insert('keystone','keystone_info')
insert('neutron','neutron_info')
insert('nova','nova_info')

}

module.exports = {insert_all}