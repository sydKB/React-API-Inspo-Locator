const { Schema, model } = require('mongoose');

const photosSchema = new Schema({
  
});

const Tech = model('Photos', photosSchema);

module.exports = Photos;
