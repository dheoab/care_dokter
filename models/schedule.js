"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.hasOne(models.Booking, { foreignKey: "ScheduleId" });
      Schedule.belongsTo(models.Doctor, { foreignKey: "DoctorId" });
      Schedule.belongsTo(models.Hours, { foreignKey: "HourId" });
    }
  }
  Schedule.init(
    {
      date: DataTypes.DATE,
      DoctorId: DataTypes.INTEGER,
      HourId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Schedule",
    }
  );
  return Schedule;
};
