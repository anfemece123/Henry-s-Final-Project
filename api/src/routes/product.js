const express = require("express");

const createNewProducts = require("../controllers/product/newProducts.controller");
const getDetails = require("../controllers/product/product.detail.controller");
const getByCategory = require("../controllers/product/product.byCategory.controller");
const getByTitle = require("../controllers/product/product.byName.controller");
const {
  getAllProducts,
  getByGender,
} = require("../controllers/product/product.controller");

const router = express.Router();

router.get("/allProducts", getAllProducts);
router.get("/category/", getByCategory);
router.get("/search", getByTitle);
router.post("/newProducts", createNewProducts);
router.get("/:id", getDetails);
router.get("/", getByGender);

module.exports = router;
