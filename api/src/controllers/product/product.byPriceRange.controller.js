const { Product } = require("../../db");
const { Op } = require("sequelize");
const splitPriceFromRange = require("../../helpers");

getByPriceOrder = async (req, res) => {
  const { priceRange } = req.query; // "10-100"
  const { minPrice, maxPrice } = splitPriceFromRange(priceRange);
  try {
    const allProducts = await Product.findAll({
      where: {
        price: {
          [Op.between]: [parseInt(minPrice), parseInt(maxPrice)],
        },
      },
    });
    return res.status(200).send(allProducts);
  } catch (error) {
    console.log("error", error);
    return res.status(404).send(error.message);
  }
};

module.exports = getByPriceOrder;
