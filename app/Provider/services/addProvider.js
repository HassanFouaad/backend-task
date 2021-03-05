const { Provider } = require("../../../models");
exports.addProvider = async ({ body }) => {
  const { name } = body;
  try {
    let provider = await Provider.create({ name });

    return {
      data: { provider },
      message: "Provider has been added",
    };
  } catch (error) {
    console.log(error);
    return {
      message: error.message,
      status: 400,
    };
  }
};
