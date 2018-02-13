'use strict';

const express = require('express');
const router = express.Router();

const controllers = require('../controllers/product-controllers');

router.post('/', controllers.post);
router.put('/:id', controllers.put);
router.delete('/', controllers.delete);

module.exports = router;
 

