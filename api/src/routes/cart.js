const express = require("express");
const {
  verifyToken,
  verifyTokenAndIsAdmin,
} = require("../middlewares/verifyUser");

const {
  createCart,
  deleteCart,
  updateCart,
  /*getCartDetail, //no es necesario porque cuando se logguea el usuario va la cart con el
   getAllCarts, // se puede considerar si hay tiempo para el panel admin, aunque solo seri a para ver
  */
} = require("../controllers/cart/cart.controller");

const router = express.Router();

router.post("/newCart/:idUser", createCart);
router.put("/update", updateCart); //no es necesario pasarle un id porque cuando se loguea, le lleva la cart correcta
router.delete("/delete/:idCart", deleteCart);

/* router.get("/allCarts", getAllCarts); //only admin verifyTokenAndIsAdmin*/

module.exports = router;
