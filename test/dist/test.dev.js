"use strict";

/* const {
    insert_json_DB
} = require('../database/insert_data')


insert_json_DB('nova') */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');
var Cat = mongoose.model('Cat', {
  name: String
});
var kitty = new Cat({
  name: 'Zildjian'
});
kitty.save().then(function () {
  return console.log('meow');
});