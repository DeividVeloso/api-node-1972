'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    // Cadeira Gamer = cadeira-gamer
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  tags:[{
    type: String,
    required: true,
  }]
});
//Exporta a model usando o mongoose
//Parâmetro1: Nome da Model
//Parâmetro2: Validações dos Schema
module.exports = mongoose.model('Product', schema);
