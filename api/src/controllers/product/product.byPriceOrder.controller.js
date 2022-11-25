const { Product } = require("../../db");

getByPriceOrder = async (req, res) => {
  const { order } = req.query; // ASC DES pedir que sea en mayuscula
  try {
    const allProducts = await Product.findAll({
      order: [["price", order]],
    });
    return res.status(200).send(allProducts);
  } catch (error) {
    console.log("error", error);
    return res.status(404).send(error.message);
  }
};

module.exports = getByPriceOrder;
