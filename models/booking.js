"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.User, { foreignKey: "UserId" });
      Booking.belongsTo(models.UsersFamily, { foreignKey: "UserFamilyId" });
      Booking.belongsTo(models.Schedule, { foreignKey: "ScheduleId" });
    }
  }
  Booking.init(
    {
      bookingCode: DataTypes.INTEGER,
      type: DataTypes.STRING,
      date: DataTypes.DATE,
      note: DataTypes.STRING,
      status: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      UserFamilyId: DataTypes.INTEGER,
      ScheduleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
