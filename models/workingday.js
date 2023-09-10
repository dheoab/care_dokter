"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WorkingDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WorkingDay.belongsTo(models.Doctor, { foreignKey: "DoctorId" });
      WorkingDay.hasMany(models.Booking, { foreignKey: "WorkingDayId" });
    }
  }
  WorkingDay.init(
    {
      days: DataTypes.STRING,
      shift: DataTypes.INTEGER,
      startShift: DataTypes.STRING,
      endShift: DataTypes.STRING,
      practiceDuration: DataTypes.TIME,
      DoctorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "WorkingDay",
    }
  );
  return WorkingDay;
};
