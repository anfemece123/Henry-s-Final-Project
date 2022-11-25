const { Product } = require("../../db");

getByTitle = async (req, res) => {
  const { title } = req.query;
  if (!title) {
    try {
      const allProducts = await Product.findAll();
      return res.status(200).send(allProducts);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
  try {
    const allProducts = await Product.findAll();
    let found = allProducts.filter((element) =>
      element.title.toLowerCase().includes(title.toLowerCase())
    );
    if (!found.length) return res.status(400).send("Product Not Found");
    return res.status(200).send(found);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = getByTitle;
