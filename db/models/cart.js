const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Order, { foreignKey: 'order_id' });
      this.belongsTo(models.Product, { foreignKey: 'product_id' });
    }
  }
  Cart.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
