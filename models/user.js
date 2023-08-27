"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.UserFamily, { foreignKey: "UserId" });
      User.hasMany(models.Booking, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      fristAddress: DataTypes.STRING,
      secondAddress: DataTypes.STRING,
      thirdAddress: DataTypes.STRING,
      city: DataTypes.STRING,
      province: DataTypes.STRING,
      addressType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};