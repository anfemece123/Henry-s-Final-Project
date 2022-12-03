const express = require("express");

const verifyUser = require("../controllers/auth/auth.controller");

const router = express.Router();

router.get("/confirm/:confirmationCode", verifyUser);

module.exports = router;
