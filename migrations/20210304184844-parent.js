module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("parent", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    }),
  down: (queryInterface) => queryInterface.dropTable("parent"),
};
