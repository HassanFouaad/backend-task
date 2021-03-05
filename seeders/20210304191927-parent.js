module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      "parent",
      [
        {
          createdAt: new Date(),
        },
        {
          createdAt: new Date(),
        },
        {
          createdAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface) =>
    queryInterface.bulkDelete("parent", null, {}),
};
