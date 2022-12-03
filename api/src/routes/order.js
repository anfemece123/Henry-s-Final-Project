const express = require("express");
//const {verifyToken, verifyTokenAndIsAdmin } = require("../middlewares/verifyUser");

const {
  createOrder,
  updateOrder,
  getOrderDetail,
  getAllOrders,
  deleteOrder,
} = require("../controllers/order/order.controller");

const router = express.Router();

router.post("/newOrder", createOrder); //only users verifyToken
router.put("/update/:idOrder", updateOrder); //only admin-to change order status verifyTokenAndIsAdmin
router.get("/allOrders", getAllOrders); //only admin verifyTokenAndIsAdmin
router.get("/:idOrder", getOrderDetail); // users and admin verifyToken
router.put("/delete/:idOrder", deleteOrder); // users and admin verifyToken
module.exports = router;
