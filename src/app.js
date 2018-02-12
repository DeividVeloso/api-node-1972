'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const indexRoutes = require('./routes/index-route');
const productRoutes = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRoutes);
app.use('/products', productRoutes);

module.exports = app;
