const http = require("http");

const { app } = require("./app");

const dotenv = require("dotenv");
require("./models/index");
dotenv.config();

const httpServer = http.createServer(app);

httpServer.listen(process.env.PORT, () =>
  console.log(`Server is up on http://localhost:${process.env.PORT}`)
);
