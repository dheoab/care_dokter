require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/openapi.json");

const errorHandler = require("./handlers/errorhandlers");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", require("./routes/index"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.all("*", (req, res) => {
  res.status(404).json({
    statusCode: 404,
    msg: "page not found",
  });
});

app.use(errorHandler);

module.exports = app;
