//product controllers

const { Product } = require("../../db");
const Test = require("../../../seeds.js");

getAllProducts = async (req, res) => {
  const allProducts = await Product.findAll();
  if (!allProducts.length) {
    try {
      const allProductsFromDb = await Product.bulkCreate(Test);
      return res.status(200).send(allProductsFromDb);
    } catch (error) {
      console.log(error);
      return res.status(404).send(error.message);
    }
  }
  try {
    const allProducts = await Product.findAll();
    res.status(200).send(allProducts);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error.message);
  }
};

module.exports = getAllProducts;
