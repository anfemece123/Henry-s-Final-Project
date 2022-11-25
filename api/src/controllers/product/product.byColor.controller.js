const { Product } = require("../../db");

getByColor = async (req, res) => {
    const { color } = req.query;
    try {
      const products = await Product.findAll({ where: {color} });
      if (!products.length) return res.status(400).send("Products Not Found");
      return res.status(200).send(products);
    } catch (error) {
      return res.status(404).send(error.message);
    }
};

module.exports = getByColor;