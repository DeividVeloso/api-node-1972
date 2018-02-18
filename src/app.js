'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const moongose = require('mongoose');

const app = express();
const router = express.Router();

moongose.connect("mongodb://veloso:veloso@ds062448.mlab.com:62448/nodestoreveloso");

//Carrega os Models
const Product = require('./models/product');

//Carrega as rotas
const indexRoutes = require('./routes/index-route');
const productRoutes = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRoutes);
app.use('/products', productRoutes);

module.exports = app;
