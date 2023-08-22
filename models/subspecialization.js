"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubSpecialization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubSpecialization.belongsTo(models.Specialization, {
        foreignKey: "SpecializationID",
      });
      SubSpecialization.hasMany(models.Doctor, {
        foreignKey: "SubSpecializationId",
      });
    }
  }
  SubSpecialization.init(
    {
      name: DataTypes.STRING,
      SpecializationId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "SubSpecialization",
    }
  );
  return SubSpecialization;
};
