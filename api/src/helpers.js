//funciones helpers
const { Product } = require("./db");

splitPriceFromRange = (string) => {
  const arrAux = string.split("-");
  const minPrice = arrAux[0];
  const maxPrice = arrAux[1];
  return {
    minPrice,
    maxPrice,
  };
};

module.exports = splitPriceFromRange;
