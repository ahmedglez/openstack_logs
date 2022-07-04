var express = require('express');
const app = express();
var bodyParser = require('body-parser');
var path = require('path');
const {load} = require('../api/load_json')

//Set the public folder
app.use(express.static('../public'));

//Allows us to parse POST data.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



//MEAN apps use a catchall after any routes created by Node.

app.use('/app', express.static('../public/'));
app.get("/load", (req, res) => {
    load()
    
})
app.get("/glance", (req, res) => {
    res.sendFile(path.resolve('../jsons/glance.json'))
})
app.get("/horizon", (req, res) => {
    res.sendFile(path.resolve('../jsons/horizon.json'))
})
app.get("/keystone", (req, res) => {
    res.sendFile(path.resolve('../jsons/keystone.json'))
})
app.get("/neutron", (req, res) => {
    res.sendFile(path.resolve('../jsons/neutron.json'))
})
app.get("/nova", (req, res) => {
    res.sendFile(path.resolve('../jsons/nova.json'))
})



app.listen(1337);

console.log('Server started at ' + Date());