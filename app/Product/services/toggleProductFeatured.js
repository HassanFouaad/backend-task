const { Product } = require("../../../models");
exports.toggleProductFeatured = async ({ body }) => {
  const { productId } = body;
  try {
    let product = await Product.findOne({ where: { id: productId } });
    if (!product) {
      return {
        error: "Invalid product id",
        status: 400,
      };
    }
    if (product.featured) {
      await product.update({ featured: false });
      return {
        message: "You have set featured to false",
        data: product,
      };
    } else {
      await product.update({ featured: true });
      return {
        message: "You have set featured to true",
        data: product,
      };
    }
  } catch (error) {
    return {
      error: error.message,
      status: 400,
    };
  }
};
