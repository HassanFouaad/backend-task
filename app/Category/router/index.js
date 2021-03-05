const { addCategory } = require("../Controller");
const { validator } = require("../../../middlewares/validator");
const { addCategorySchema } = require("../schema/addCateogry");

const router = require("express-promise-router")();
const baseRoues = {
  addCategory: "/add",
};

router.post(baseRoues.addCategory, validator(addCategorySchema), addCategory);

exports.categoryRouter = router;
