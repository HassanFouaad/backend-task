module.exports = function (sequelize, DataTypes) {
  const category = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      parentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "parent",
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "category",
    }
  );
  return category;
};
