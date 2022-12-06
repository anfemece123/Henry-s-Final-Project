const express = require("express");
const {
  verifyToken,
  verifyTokenAndIsAdmin,
} = require("../middlewares/verifyUser");

const {
  createCart,
  /* getAllCarts,
  updateCart,
  deleteCart,
  getCartDetail, */
} = require("../controllers/cart/cart.controller");

const router = express.Router();

router.post("/newCart", verifyToken, createCart); //only users verifyToken
/* router.get("/allOrders", getAllCarts); //only admin verifyTokenAndIsAdmin
router.put("/update/:idCart", updateCart); //only admin-to change order status verifyTokenAndIsAdmin
router.put("/delete/:idCart", deleteCart); // cuando el usuario efectua la compra, el cart se tiene que borrar porque  pasa a ser una order
router.get("/:idOrder", getCartDetail); // users and admin verifyToken */

module.exports = router;
