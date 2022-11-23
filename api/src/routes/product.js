const express = require('express');

const getAllProducts = require('../controllers/product/product.controller');

const router = express.Router();
//= ===============================
// Product routes
//= ===============================

router.get('/allProducts', getAllProducts);



module.exports = router;