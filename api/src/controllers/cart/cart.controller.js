const { Cart } = require("../../db");
const { Product } = require("../../db");
const { User } = require("../../db");

let id = 1;

//el usuario se desloguea y no confirma compra, por lo tanto se le crea un cart
createCart = async (req, res) => {
  const { products, quantity, total } = req.body;
  const { idUser } = req.params;
  console.log("idUser:", idUser);
  if (!products || !quantity || !total) {
    return res.status(400).send("Missing Data");
  }
  console.log("products", products);
  console.log("quantity", quantity);
  console.log("total", total);
  try {
    const cart = await Cart.findOne({ where: { UserId: idUser } });
    console.log(cart);
    cart && (await cart.destroy());

    const newCart = await Cart.create({
      id,
      products,
      products_quantity: quantity,
      total,
    });
    await newCart.setUser(idUser);
    res.status(201).send("Cart Succesfully Created");
    id++;
    return;
  } catch (error) {
    console.log(error);
    return res.status(404).send(error.message);
  }
};

//cuando el usuario efectua la compra, el cart se tiene que borrar porque pasa a ser una order
deleteCart = async (req, res) => {
  const { idUser } = req.params;
  try {
    const cart = await Cart.findOne({ where: { UserId: idUser } });
    console.log(cart);
    cart && (await cart.destroy());
    res.status(200).send("Cart Succesfully Removed");
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

//el usuario ya tiene un cart creado pero nuevamente decide no comprar,
//entonces su cart tiene que ser la misma porque es unica
//pero se tiene que actualizar
updateCart = async (req, res) => {
  const { id, products, products_quantity, total } = req.body;

  if (!products || !products_quantity || !total) {
    return res.status(400).send("Missing Data");
  }
  try {
    const cart = await Cart.findOne({
      where: { id },
    });
    cart.set({
      products,
      products_quantity,
      total,
    });
    await cart.save();
    res.status(200).send("Cart Successfully Updated");
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = {
  createCart,
  deleteCart,
  updateCart,
  /* getAllCarts,
  getCartDetail, */
};
