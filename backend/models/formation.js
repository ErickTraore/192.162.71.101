'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Formation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Formation.init({
    attachment: DataTypes.STRING,
    titleFirst: DataTypes.STRING,
    titleSecond: DataTypes.STRING,
    niveau: DataTypes.STRING,
    duration: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Formation',
  });
  return Formation;
};