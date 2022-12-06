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
    return res.status(404).send(error.message);
  }
};

//cuando el usuario efectua la compra, el cart se tiene que borrar porque pasa a ser una order
deleteCart = async (req, res) => {
  const { idCart } = req.params;
  try {
    const cart = await Cart.findOne({
      where: { id: idCart },
    });
    await cart.destroy();
    res.status(200).send("Cart Succesfully Removed");
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = {
  createCart,
  deleteCart,
  /* getAllCarts,
  updateCart,
  
  getCartDetail, */
};
