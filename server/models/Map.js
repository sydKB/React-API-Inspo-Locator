const { Schema, model } = require('mongoose');

const mapSchema = new Schema({

});

const Map = model('Map', mapSchema);

module.exports = Map;
