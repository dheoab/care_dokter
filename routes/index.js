const express = require("express");
const auth = require("../middlewares/authentication");

const router = express.Router();

router.use("/auth", require("./auth"));

router.use("/hospitals", require("./hospital"));

router.use("/users", auth, require("./user"));

module.exports = router;
