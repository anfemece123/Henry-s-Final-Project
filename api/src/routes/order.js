const express = require("express");
/* const {verifyToken, verifyTokenAndIsAdmin } = require("../middlewares/verifyUser"); */

const {
  createOrder,
  updateOrder,
  getOrderDetail,
  getAllOrders,
  deleteOrder,
} = require("../controllers/order/order.controller");

const router = express.Router();

router.post("/newOrder", /* verifyToken , */ createOrder); //only users
router.put("/update/:idOrder", /* verifyTokenAndIsAdmin , */ updateOrder); //only admin - to change order status
router.get("/allOrders", /* verifyTokenAndIsAdmin , */ getAllOrders); //only admin
router.get("/:idOrder", /* verifyToken , */ getOrderDetail); // users and admin
router.put("/delete/:idOrder" /* verifyToken , */, deleteOrder); // users and admin
module.exports = router;
