"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor.belongsTo(models.Specialization, {
        foreignKey: "SpecializationId",
      });
      Doctor.belongsTo(models.SubSpecialization, {
        foreignKey: "SubSpecializationId",
      });
      Doctor.belongsTo(models.Hospital, {
        foreignKey: "HospitalId",
      });
    }
  }
  Doctor.init(
    {
      fristName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      title: DataTypes.STRING,
      SubSpecializationId: DataTypes.INTEGER,
      SpecializationId: DataTypes.INTEGER,
      HospitalId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Doctor",
    }
  );
  return Doctor;
};
