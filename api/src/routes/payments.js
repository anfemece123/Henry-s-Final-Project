const express = require("express");
const router = express.Router();

const checkout = require("../controllers/stripe/stripe.controller");

router.post("/checkout", checkout);

module.exports = router;
