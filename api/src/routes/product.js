const express = require("express");
/* const {verifyToken, verifyTokenAndIsAdmin } = require("../middlewares/verifyUser"); */

const {
  getAllProducts,
  createNewProducts,
  getDetail,
  getByTitle,
  updateProduct,
  deleteProduct,
} = require("../controllers/product/product.controller");
const getByCategory = require("../controllers/product/product.byCategory.controller");
const getByGender = require("../controllers/product/product.byGender.controller");
const getByPriceOrder = require("../controllers/product/product.byPriceOrder.controller");
const getByPriceRange = require("../controllers/product/product.byPriceRange.controller");
const getByColor = require("../controllers/product/product.byColor.controller");

const router = express.Router();

router.get("/byPriceOrder", getByPriceOrder);
router.get("/allProducts", getAllProducts);
router.post("/createProduct", /* verifyTokenAndIsAdmin,  */ createNewProducts);
router.get("/search", getByTitle);
router.get("/byCategory", getByCategory);
router.get("/byGender", getByGender);
router.get("/byPriceRange", getByPriceRange);
router.get("/byColor", getByColor);
router.put("/update/:idProduct", /* verifyTokenAndIsAdmin,  */ updateProduct);
router.delete(
  "/delete/:idProduct",
  /* verifyTokenAndIsAdmin,  */ deleteProduct
);
router.get("/:id", getDetail);

module.exports = router;
