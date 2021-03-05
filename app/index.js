const express = require("express");
const bodyParser = require("body-parser");
const { ServerError } = require("../utils/core");
const cors = require("cors");
const logger = require("morgan");
const { helmetMiddleware } = require("../middlewares/helmet");
const debug = require("debug")("app:express");
const { categoryRouter } = require("./Category/router");
const { productRouter } = require("./Product/router");
const { providerRouter } = require("./Provider/router");
const app = express();

app.use(helmetMiddleware);
app.use(cors());
app.use(bodyParser.json({ limit: "50mb", strict: false }));
app.use(logger("dev"));

app.get("/", (req, res, next) => {
  res.json({ message: "server is Up and Running!" });
});

//APIS GOES HERE
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/provider", providerRouter);

app.use("*", (req, res, next) => {
  next(new ServerError("API_NOT_FOUND", 404));
});

app.use((error, req, res, next) => {
  if (!error.status) {
    debug(error);
    return res.status(500).json({ errors: ["server error"], status: 500 });
  }
  debug("Custom Server Error >", error.message);
  let errors = {};
  if (typeof error.message === "string" || error.message instanceof String) {
    // it's a string error
    errors.nonFieldErrors = [error.message];
  } else {
    // it's a validation error object
    errors = { ...error.message };
  }

  return res.status(error.status).json({ errors, status: error.status });
});

module.exports = { app };
