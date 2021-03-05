const { sequelize } = require("../models");
async function paginationwithCondition(model, req, option) {
  if (!model || !req || !option) {
    throw new Error(
      "The function should take 3 arguments model , req and option"
    );
  }
  let limit = 25;

  let page = Math.abs(Number(req.query.page));

  if (Number.isNaN(page)) {
    page = 1;
  }
  const error = {
    message: "",
    status: "",
  };
  let offset = 0 + (page - 1) * limit;
  option["limit"] = limit;
  option["offset"] = offset;
  const modelToPaginate = await model.findAndCountAll(option);
  let thisCount = modelToPaginate.count;
  let pages = Math.ceil(Number(modelToPaginate.count) / limit);
  if (Array.isArray(modelToPaginate.count)) {
    console.log(modelToPaginate.count);
    pages = Math.ceil(Number(parseInt(thisCount[0].count)) / limit);
    thisCount = parseInt(thisCount[0].count);
  }
  const paginated = {
    result: modelToPaginate.rows,
    thisPage: page,
    allPages: pages,
    count: thisCount,
  };
  return { paginated, error };
}

let paginationwithRaw = async (query, columns, page, limit) => {
  const count = await sequelize.query(
    `SELECT COUNT(*) 
    ${query}
   `,
    { type: sequelize.QueryTypes.SELECT }
  );
  page = Math.abs(Number(page));

  if (Number.isNaN(page)) {
    page = 1;
  }

  let thisCount = count[0].count;

  let offset = 0 + (page - 1) * limit;

  let pages = Math.ceil(Number(thisCount) / limit);

  let p = await sequelize.query(
    `select
    ${columns}
    ${query}
    LIMIT  ${limit} OFFSET  ${offset}
    `,
    {
      type: sequelize.QueryTypes.SELECT,
    }
  );
  let paginated = {
    result: p,
    thisPage: page,
    allPages: pages,
    count: parseInt(thisCount),
  };

  return paginated;
};

module.exports = {
  paginationwithCondition,
  paginationwithRaw,
};
