module.exports = function (sequelize, DataTypes) {
  const ProductProvider = sequelize.define(
    "ProductProvider",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "product",
          key: "id",
        },
      },
      providerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "provider",
          key: "id",
        },
      },
      price: {
        type: DataTypes.NUMERIC,
        allowNull: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
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
      tableName: "product_provider",
    }
  );
  ProductProvider.associate = (models) => {
    ProductProvider.belongsTo(models.Product, {
      foreignKey: "productId",
      as: "product",
    });
    ProductProvider.belongsTo(models.Provider, {
      foreignKey: "providerId",
      as: "provider",
    });
  };

  return ProductProvider;
};
