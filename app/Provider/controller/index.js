const { addProvider } = require("../services/addProvider");
const { controller } = require("../../../middlewares/controller");

module.exports = {
  addProvider: controller(addProvider),
};
