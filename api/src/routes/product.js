const express = require('express');

const getAllProducts = require('../controllers/product/product.controller');
const createNewProducts = require('../controllers/product/newProducts.controller');
const getDetails =require('../controllers/product/product.detail.controller');

const router = express.Router();
//= ===============================
// Product routes
//= ===============================

router.get('/allProducts', getAllProducts);
router.post('/newProducts', createNewProducts);
router.get('/:id', getDetails);


module.exports = router;