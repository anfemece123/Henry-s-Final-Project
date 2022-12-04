const { Order } = require("../../db");
const { User } = require("../../db");

let id = 1;
createOrder = async (req, res) => {
  const { products, products_quantity, total, status } = req.body;
  const userId = req.UserId;
  if (!products || !products_quantity || !total || !status) {
    return res.status(400).send("Missing Data");
  }
  try {
    const newOrder = await Order.create({
      id,
      products,
      products_quantity,
      total,
      status,
    });
    await newOrder.setUser(userId);
    res.status(201).send("Order Succesfully Created");
    id++;
    return;
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
};

updateOrder = async (req, res) => {
  const { idOrder } = req.params;
  const { products, products_quantity, total, status } = req.body;

  if (!products || !products_quantity || !total || !status) {
    return res.status(400).send("Missing Data");
  }
  try {
    const order = await Order.findOne({
      where: { idOrder },
    });
    user.set({
      products,
      products_quantity,
      total,
      status,
    });
    await user.save();
    res.status(200).send("Order Successfully Updated");
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

getOrderDetail = async (req, res) => {
  try {
    const { idOrder } = req.params;
    const orderDetail = await Order.findOne({ where: { idOrder } });
    if (!orderDetail) return res.status(400).send("Order Not Found");
    return res.status(200).send(orderDetail);
  } catch (error) {
    return res.status(404).send(error);
  }
};

getAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.findAll();
    if (!allOrders) return res.status(400).send("Orders Not Found");
    return res.status(200).send(allOrders);
  } catch (error) {
    return res.status(404).send(error);
  }
};
//LOGICAL ERASING
deleteOrder = async (req, res) => {
  const { idOrder } = req.params; // en realidad lo voy a recibir de req.userId cuando conecte el middleware
  try {
    const order = await Order.findOne({
      where: { idOrder },
    });
    await order.destroy();
    res.status(200).send("Order Succesfully Removed");
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = {
  createOrder,
  updateOrder,
  getOrderDetail,
  getAllOrders,
  deleteOrder,
};
