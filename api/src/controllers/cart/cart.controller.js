const { Cart } = require("../../db");
const { Product } = require("../../db");
const { User } = require("../../db");

let id = 1;

//el usuario se desloguea y no confirma compra, por lo tanto se le crea un carrito
createCart = async (req, res) => {
  const { products, products_quantity, total } = req.body;
  const userId = req.UserId;
  if (!products || !products_quantity || !total) {
    return res.status(400).send("Missing Data");
  }
  try {
    const newCart = await Cart.create({
      id,
      products,
      products_quantity,
      total,
    });
    await newCart.setUser(userId);
    res.status(201).send("Cart Succesfully Created");
    id++;
    return;
  } catch (error) {
    console.log(error);
    return res.status(404).send(error.message);
  }
};

module.exports = {
  createCart,
  /* getAllCarts,
  updateCart,
  deleteCart,
  getCartDetail, */
};
