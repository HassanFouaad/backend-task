const {
  Category,
  Product,
  Provider,
  ProductProvider,
} = require("../../../models");

exports.addProduct = async ({ body }) => {
  const { categoryId, name, image } = body;
  try {
    let category = await Category.findByPk(categoryId);
    if (!category) {
      return {
        error: "Invalid category id",
        status: 400,
      };
    }
    let product = await Product.create({ categoryId, name, image });

    return {
      data: { product, category },
      message: "Product has been added",
    };
  } catch (error) {
    console.log(error);
    return {
      message: error.message,
      status: 400,
    };
  }
};
exports.addProductToProvider = async ({ body }) => {
  const { providerId, productId, available, price } = body;
  let product = await Product.findByPk(productId);

  if (!product) {
    return {
      error: "No Products found",
      status: 400,
    };
  }
  let provider = await Provider.findByPk(providerId);

  if (!provider) {
    return {
      error: "No providers found",
      status: 400,
    };
  }

  try {
    let productProvider = await ProductProvider.create({
      providerId: provider.id,
      productId: product.id,
      available,
      price,
    });
    return {
      data: productProvider,
      message: "Product added to provider",
    };
  } catch (error) {}
};
