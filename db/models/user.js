'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product, {
        foreignKey: 'user_id',
      });
      // define association here
    }
  }
  User.init({
    user_name: DataTypes.STRING,
    mail: DataTypes.STRING,
    pass: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};