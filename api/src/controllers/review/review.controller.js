const { Review } = require("../../db");
const { Product } = require("../../db");
const { User } = require("../../db");

let id = 1;

createReview = async (req, res) => {
  console.log("funciona");
  const { productId } = req.params;
  const { calification, comment } = req.body;
  const userId = req.UserId;

  if (!calification || !comment) {
    return res.status(400).send("Missing Data");
  }
  try {
    const newReview = await Review.create({
      id,
      calification,
      comment,
      isVisible: true,
    });
    await newReview.setUser(userId);
    await newReview.setProduct(productId);
    res.status(201).send("Review Successfully Created");
    id++;
    return;
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = createReview;
/* changeVisibility,
  getOrderDetail,
  getAllReviews, */
