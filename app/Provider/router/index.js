const { addProvider } = require("../Controller");
const { validator } = require("../../../middlewares/validator");
const { addProviderSchema } = require("../schema/addProvider");

const router = require("express-promise-router")();
const baseRoues = {
  addProvider: "/add",
};

router.post(baseRoues.addProvider, validator(addProviderSchema), addProvider);

exports.providerRouter = router;
