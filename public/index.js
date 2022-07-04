const {
    copy_logs
} = require('../commands/copy_logs')
const {
    insert_all
} = require('../utils/insert_all_log')
copy_logs();
insert_all();