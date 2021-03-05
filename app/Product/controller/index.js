const { addProduct, addProductToProvider } = require("../services/addProduct");
const { listProductsService } = require("../services/lsitProducts");
const { toggleProductFeatured } = require("../services/toggleProductFeatured");
const { controller } = require("../../../middlewares/controller");

module.exports = {
  addProduct: controller(addProduct),
  listProducts: controller(listProductsService),
  addProductToProvider: controller(addProductToProvider),
  toggleProductFeatured: controller(toggleProductFeatured),
};
