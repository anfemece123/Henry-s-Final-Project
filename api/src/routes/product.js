const express = require("express");

const getAllProducts = require("../controllers/product/product.controller");
const createNewProducts = require("../controllers/product/newProducts.controller");
const getDetails = require("../controllers/product/product.detail.controller");
const getByCategory = require("../controllers/product/product.byCategory.controller");
const getByTitle = require("../controllers/product/product.byName.controller");
const getByGender = require("../controllers/product/product.byGender.controller");
const getByPriceOrder = require("../controllers/product/product.byPriceOrder.controller");
const getByPriceRange = require("../controllers/product/product.byPriceRange.controller");

const router = express.Router();

router.get("/byPriceOrder", getByPriceOrder);
router.get("/allProducts", getAllProducts);
router.post("/createProduct", createNewProducts);
router.get("/search", getByTitle);
router.get("/byCategory", getByCategory);
router.get("/byGender", getByGender);
router.get("/byPriceRange", getByPriceRange);
router.get("/:id", getDetails);

module.exports = router;
