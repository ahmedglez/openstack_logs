var express = require('express');
const app = express();
const date = new Date()
var bodyParser = require('body-parser');
var path = require('path');
const {
    watch
} = require('../api/logs_watcher');
watch()
const {
    load
} = require('../api/load_json')

app.use(express.static('../public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());




app.use('/app', express.static('../public/'));

app.use('/compute', (req, res) => {
    setTimeout(() => {
        res.sendFile(path.resolve('../jsons/nova' + '.json'))
    }, 500);
})
app.use('/network', (req, res) => {
    setTimeout(() => {
        res.sendFile(path.resolve('../jsons/neutron' + '.json'))
    }, 500);
})
app.use('/identity', (req, res) => {
    setTimeout(() => {
        res.sendFile(path.resolve('../jsons/keystone' + '.json'))
    }, 1000);

})



app.listen(1337);

console.log('Server started at ' + Date());