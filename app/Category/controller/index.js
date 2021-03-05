const { addCategory } = require("../services/addCategory");
const { controller } = require("../../../middlewares/controller");

module.exports = {
  addCategory: controller(addCategory),
};
