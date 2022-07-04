"use strict";

var _require = require('../commands/copy_logs'),
    copy_logs = _require.copy_logs;

var _require2 = require('../utils/insert_all_log'),
    insert_all = _require2.insert_all;

copy_logs();
insert_all();