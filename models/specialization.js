"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Specialization.belongsTo(models.Hospital, { foreignKey: "HospitalId" });
      Specialization.hasMany(models.SubSpecialization, {
        foreignKey: "SpecializationID",
      });
      Specialization.hasMany(models.Doctor, {
        foreignKey: "SpecializationId",
      });
    }
  }
  Specialization.init(
    {
      name: DataTypes.STRING,
      HospitalId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Specialization",
    }
  );
  return Specialization;
};
