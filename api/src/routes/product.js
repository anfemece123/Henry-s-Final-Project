const express = require("express");
/* const {verifyToken, verifyTokenAndIsAdmin } = require("../middlewares/verifyUser"); */

const {
  getAllProducts,
  createNewProducts,
  getDetail,
  getByTitle,
  updateProduct,
  deleteProduct,
  getByFilters,
} = require("../controllers/product/product.controller");

const router = express.Router();

router.get("/allProducts", getAllProducts);
router.post("/createProduct", /* verifyTokenAndIsAdmin,  */ createNewProducts);
router.get("/search", getByTitle);
router.post("/filtered", getByFilters);
router.put("/update/:idProduct", /* verifyTokenAndIsAdmin,  */ updateProduct);
router.delete(
  "/delete/:idProduct",
  /* verifyTokenAndIsAdmin,  */ deleteProduct
);
router.get("/:id", getDetail);

module.exports = router;
