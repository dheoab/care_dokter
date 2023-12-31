"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hospital.hasMany(models.Specialization, { foreignKey: "HospitalId" });
      Hospital.hasMany(models.Doctor, { foreignKey: "HospitalId" });
    }
  }
  Hospital.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Hospital",
    }
  );
  return Hospital;
};
