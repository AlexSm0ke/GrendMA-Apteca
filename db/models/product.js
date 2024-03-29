const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Cart, { foreignKey: 'product_id' });
    }

    // define association here
  }

  Product.init(
    {
      product_name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      picture: DataTypes.TEXT,
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    },
  );

  return Product;
};
