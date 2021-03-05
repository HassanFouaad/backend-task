const { Category, Parent } = require("../../../models");
exports.addCategory = async ({ body }) => {
  const { name } = body;
  try {
    let parent = await Parent.findOne();

    if (!parent) {
      return {
        error: "No Parents Found Please Run npm run seed",
        status: 404,
      };
    }

    let category = await Category.create({ parentId: parent.id, name });

    return {
      data: category,
      message: "You have added New Category",
    };
  } catch (error) {
    console.log(error);
    return {
      message: error.message,
      status: 400,
    };
  }
};
