const dotenv = require("dotenv");

const envFound = dotenv.config();
if (!envFound) {
  throw new Error(" Couldn't find .env file!");
}

module.exports = {
  development: {
    username: process.env.DB_DEV_USERNAME,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    port: process.env.DB_DEV_PORT,
    dialect: "postgres",
  },
};
