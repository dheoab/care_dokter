const express = require("express");

const router = express.Router();

router.use("/auth", require("./auth"));

router.use("/hospitals", require("./hospital"));

module.exports = router;
