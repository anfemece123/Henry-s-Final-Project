const { Review } = require("../../db");
const { Product } = require("../../db");
const { User } = require("../../db");

let id = 1;

createReview = async (req, res) => {
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

getAllReviews = async (req, res) => {
  try {
    const allReviews = await Review.findAll({ include: { all: true } });
    if (!allReviews) return res.status(400).send("Reviews Not Found");
    return res.status(200).send(allReviews);
  } catch (error) {
    return res.status(404).send(error);
  }
};

getReviewDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const reviewDetail = await Review.findByPk(id, { include: { all: true } });
    if (!reviewDetail) return res.status(400).send("User Not Found");
    return res.status(200).send(reviewDetail);
  } catch (error) {
    return res.status(404).send(error);
  }
};

changeVisibility = async (req, res) => {
  const { idReview } = req.params;

  try {
    const review = await Review.findOne({
      where: { id: idReview },
    });
    review.update({
      isVisible: false,
    });
    await review.save();
    res.status(200).send("Review Successfully Updated");
  } catch (error) {
    console.log(error);
    return res.status(404).send(error.message);
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getOrderDetail,
  changeVisibility,
};
