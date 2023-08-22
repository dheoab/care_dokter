"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UsersFamily extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UsersFamily.belongsTo(models.User, { foreignKey: "UserId" });
      UsersFamily.hasMany(models.Booking, { foreignKey: "UserFamilyId" });
    }
  }
  UsersFamily.init(
    {
      imgKtp: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      familyRelation: DataTypes.STRING,
      frontName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      sex: DataTypes.STRING,
      placeOfBirth: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE,
      nationality: DataTypes.STRING,
      identificationNumber: DataTypes.STRING,
      education: DataTypes.STRING,
      religion: DataTypes.STRING,
      marriageStatus: DataTypes.STRING,
      occupation: DataTypes.STRING,
      bloodType: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UsersFamily",
    }
  );
  return UsersFamily;
};
