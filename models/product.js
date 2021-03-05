module.exports = function (sequelize, DataTypes) {
  const product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "category",
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      featured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
      tableName: "product",
    }
  );

  product.associate = (models) => {
    product.belongsToMany(models.Provider, {
      through: models.ProductProvider,
      foreignKey: "productId",
      otherKey: "providerId",
      as: "provider",
    });

    product.hasMany(models.ProductProvider, {
      foreignKey: "productId",
      as: "relation",
    });
  };
  return product;
};
