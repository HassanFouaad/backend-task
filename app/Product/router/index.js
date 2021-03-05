const {
  addProduct,
  listProducts,
  addProductToProvider,
  toggleProductFeatured,
} = require("../Controller");
const { validator } = require("../../../middlewares/validator");

//SCHEMA
const {
  addProductSchema,
  addProductToProviderSchema,
} = require("../schema/addProductSchema");
const { listProductsSchema } = require("../schema/listProductsSchema");
const {
  toggleProductFeaturedSchema,
} = require("../schema/toggleProductFeatured");

const router = require("express-promise-router")();
const baseRoues = {
  addProduct: "/add",
  addProductToProvider: "/add/to-provider",
  listProduct: "/list",
  toggleProductFeatured: "/featured-toggle",
};

router.post(baseRoues.addProduct, validator(addProductSchema), addProduct);

router.post(
  baseRoues.addProductToProvider,
  validator(addProductToProviderSchema),
  addProductToProvider
);
router.get(baseRoues.listProduct, validator(listProductsSchema), listProducts);
router.put(
  baseRoues.toggleProductFeatured,
  validator(toggleProductFeaturedSchema),
  toggleProductFeatured
);

exports.productRouter = router;
