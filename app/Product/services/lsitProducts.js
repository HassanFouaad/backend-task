const { paginationwithRaw } = require("../../../middlewares/pagination");

exports.listProductsService = async (req) => {
  let { categoryId, page } = req.query;

  try {
    let columns = `

    l."productId",
    l."providerId",
    p.name as "productName",
    min(price) as "lowestPrice",
    pr.name as "providerName",
    p."createdAt" as "createdAt"
    `;

    let query = `
    from product_provider l,
         (select "productId", "providerId"
            from product_provider 
           group by "productId", "providerId") m
    JOIN product p ON p.id = m."productId" 
    JOIN provider pr on pr.id = m."providerId"
   where l."productId" = m."productId"
     and l."providerId" = m."providerId"
     and (p."categoryId" in (Select id from category c where (c.id = ${categoryId})))
   group by l."productId",
   l."providerId",
   p.name,
   p."createdAt",
   pr.name
    `;

    let result = await paginationwithRaw(query, columns, page, 25);

    return {
      data: result,
    };
  } catch (error) {
    if (error.message === `Cannot read property 'count' of undefined`) {
      return {
        data: { result: [] },
        message: "No products found in this category",
      };
    }
    return {
      error: error.message,
      status: 400,
    };
  }
};
