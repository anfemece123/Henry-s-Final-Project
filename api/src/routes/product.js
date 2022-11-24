const express = require('express');

const getAllProducts = require('../controllers/product/product.controller');
const createNewProducts = require('../controllers/product/newProducts.controller');

const router = express.Router();
//= ===============================
// Product routes
//= ===============================

router.get('/allProducts', getAllProducts);
router.post('/newProducts', createNewProducts);



module.exports = router;