//product controllers

const { Product } = require("../../db");
const Test = require("../../../seeds.js");

getAllProducts = async (req, res) => {
  const allProducts = await Product.findAll({
    where: {},
  });

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
    const allProducts = await Product.findAll({
      include: { all: true },
    });
    res.status(200).send(allProducts);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error.message);
  }
};

let id = 28;

createNewProducts = async (req, res) => {
  const {
    title,
    brand,
    category,
    color,
    season,
    price,
    isOnSale,
    size,
    gender,
    stock,
    image,
  } = req.body;
  if (
    !title ||
    !category ||
    !color ||
    !season ||
    !price ||
    !size ||
    !gender ||
    !image
  ) {
    return res.status(400).send("Missing Data");
  }
  try {
    const [newProduct, created] = await Product.findOrCreate({
      where: { title },
      defaults: {
        id,
        title,
        brand,
        category,
        color,
        season,
        price,
        isOnSale,
        size,
        gender,
        stock,
        image,
      },
    });
    created && id++;
    return res.status(201).send([newProduct, created]);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
};

getDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const productDetail = await Product.findByPk(id, {
      include: { all: true },
    });
    if (!productDetail) return res.status(400).send("Product Not Found");
    return res.status(200).send(productDetail);
  } catch (error) {
    return res.status(404).send(error);
  }
};

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

updateProduct = async (req, res) => {
  const { idProduct } = req.params;
  const fieldsToChange = req.body;
  const fieldsToUpdate = { ...fieldsToChange };

  if (!Object.entries(fieldsToUpdate).length)
    return res.status(400).send("Missing Data");

  if (Object.entries(fieldsToUpdate).length === 1) {
    try {
      const product = await Product.findOne({
        where: { id: idProduct },
      });
      await product.update(fieldsToUpdate);
      await product.save();
      res.status(200).send("Product Successfully Updated");
    } catch (error) {}
  }
  try {
    const product = await Product.findOne({
      where: { id: idProduct },
    });
    product.set(fieldsToUpdate);
    await product.save();
    res.status(200).send("Product Successfully Updated");
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

deleteProduct = async (req, res) => {
  const { idProduct } = req.params;
  try {
    const product = await Product.findOne({
      where: { id: idProduct },
    });
    await product.destroy();
    res.status(200).send(idProduct);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

getByFilters = async (req, res) => {
  //quiero filtrar por category, color, gender y ordenar por precio ASC o DES
  //recibo los filtros por body
  const { category, color, gender } = req.body;
  const consulta = {};
  if (category) consulta.category = category;
  if (color) consulta.color = color;
  if (gender) consulta.gender = gender;
  try {
    const productsFiltered = await Product.findAll({
      where: consulta,
    });
    if (!productsFiltered.length)
      return res.status(400).send("Products Not Found");
    res.status(200).send(productsFiltered);
  } catch (error) {
    console.log("error: ", error);
    return res.status(404).send(error.message);
  }
};

module.exports = {
  getAllProducts,
  createNewProducts,
  getDetail,
  getByTitle,
  updateProduct,
  deleteProduct,
  getByFilters,
};
