"use strict";
const { hashPassword } = require("../helpers/bcrypt");

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
      User.hasMany(models.UsersFamily, { foreignKey: "UserId" });
      User.hasMany(models.Booking, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Your email has been used, please choose another email",
        },
        validate: {
          notEmpty: {
            msg: "email should be filled",
          },
          notNull: {
            msg: "email  should be filled",
          },
          isEmail: {
            msg: "Email input is wrong, please check again",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "password should be filled",
          },
          notNull: {
            msg: "password should be filled",
          },
          len: {
            args: [5],
            msg: "Password length should be more than 5 characters",
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "username should be filled",
          },
          notNull: {
            msg: "username should be filled",
          },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Phone Number is required",
          },
          notEmpty: {
            msg: "Phone Number is required",
          },
        },
      },
      fristAddress: DataTypes.STRING,
      secondAddress: DataTypes.STRING,
      thirdAddress: DataTypes.STRING,
      city: DataTypes.STRING,
      province: DataTypes.STRING,
      addressType: DataTypes.STRING,
      userPoint: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((user) => {
    user.userPoint = 0;
    user.password = hashPassword(user.password);
  });
  return User;
};
