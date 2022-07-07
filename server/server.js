var express = require('express');
const app = express();
const date = new Date()
var bodyParser = require('body-parser');
var path = require('path');
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
    load('nova').then(() => {
        setTimeout(() => {
            res.sendFile(path.resolve('../jsons/nova' + '_' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '.json'))
        }, 1000);
    }).catch(err => {
        console.log(err)
    })
})
app.use('/network', (req, res) => {
    load('neutron').then(() => {
        setTimeout(() => {
            res.sendFile(path.resolve('../jsons/neutron' + '_' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '.json'))
        }, 1000);
    }).catch(err => {
        console.log(err)
    })
})
app.use('/identity', (req, res) => {
    load('keystone').then(() => {
        setTimeout(() => {
            res.sendFile(path.resolve('../jsons/keystone' + '_' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '.json'))
        }, 1000);
    }).catch(err => {
        console.log(err)
    })
})



app.listen(1337);

console.log('Server started at ' + Date());