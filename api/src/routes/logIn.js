const express = require("express");

const logInUser = require("../controllers/logIn/logIn.controller");

const router = express.Router();

router.post("/", logInUser);

module.exports = router;
