const express = require("express");
const {
  verifyToken,
  verifyTokenAndIsAdmin,
} = require("../middlewares/verifyUser");

const {
  createCart,
  deleteCart,
  /* getAllCarts,
  updateCart,
  
  getCartDetail, */
} = require("../controllers/cart/cart.controller");

const router = express.Router();

router.post("/newCart", verifyToken, createCart); //only users verifyToken
router.delete("/delete/:idCart", deleteCart);
/* router.get("/allOrders", getAllCarts); //only admin verifyTokenAndIsAdmin
router.put("/update/:idCart", updateCart); //only admin-to change order status verifyTokenAndIsAdmin

router.get("/:idOrder", getCartDetail); // users and admin verifyToken */

module.exports = router;
