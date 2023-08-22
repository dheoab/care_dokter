"use strict";
const { Model } = require("sequelize");
const schedule = require("./schedule");
module.exports = (sequelize, DataTypes) => {
  class Hours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hours.hasMany(models.Schedule, { foreignKey: "ScheduleId" });
    }
  }
  Hours.init(
    {
      clocking: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Hours",
    }
  );
  return Hours;
};
