const { Review } = require("../../db");
const { Product } = require("../../db");
const { User } = require("../../db");

let id = 1;

createReview = async (req, res) => {
  console.log("funciona");
  /*     const { products, products_quantity, total } = req.body;
    const userId = req.UserId;
    console.log("products:", products);
    if (!products || !products_quantity || !total) {
      return res.status(400).send("Missing Data");
    }
    try {
      const newOrder = await Order.create({
        id,
        products,
        products_quantity,
        total,
        status: "pending",
      });
      await newOrder.setUser(userId);
  
      //actualizo el stock
      for (const element of products) {
        try {
          const { id } = element;
          const product = await Product.findOne({ where: { id } });
          const stockUpdated = product.stock - element.quantity;
          await product.update({ stock: stockUpdated });
          await product.save();
        } catch (error) {
          return res.status(404).send(error.message);
        }
      }
      const user = await User.findOne({ where: { id: userId } });
      nodemailer.sendPurchaseConfirmation(user.first_name, user.email, newOrder);
      res.status(201).send("Order Succesfully Created");
      id++;
      return;
    } catch (error) {
      return res.status(404).send(error.message);
    } */
};

module.exports = createReview;
/* changeVisibility,
  getOrderDetail,
  getAllReviews, */
