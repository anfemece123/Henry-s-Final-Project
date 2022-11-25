const { Product } = require("../../db");

getByGender = async (req, res) => {
  const { gender } = req.query;
  try {
    const products = await Product.findAll({ where: { gender } });
    if (!products.length) return res.status(400).send("Products Not Found");
    return res.status(200).send(products);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = getByGender;
