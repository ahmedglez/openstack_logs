const {
    insert_json_DB
} = require('../database/insert_data');
const {
    convert
} = require('../functions/convert_to_json');
//crear promesa
/* const promesa = new Promise((resolve, reject) => {
    convert('neutron')
})
promesa.then(convert('keystone'))
promesa.then(convert('nova'))
promesa.then(insert_json_DB('neutron'))
promesa.then(insert_json_DB('keystone'))
promesa.then(insert_json_DB('nova'))
promesa.catch(err => console.log(err)); */

function convert_jsons() {
    convert('nova');
    convert('neutron');
    convert('keystone');
    
}
function insert_jsons() {
    insert_json_DB('nova');
    insert_json_DB('neutron');
    insert_json_DB('keystone');
}


async function main() {
    convert_jsons()
    await setTimeout(() => {
        insert_jsons()
    }   , 1000);
}
main()