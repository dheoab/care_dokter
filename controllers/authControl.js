const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class authController {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber } = req.body;

      const newUser = await User.create({
        username,
        email,
        password,
        phoneNumber,
      });

      res.status(201).json({
        statusCode: 201,
        id: newUser.id,
        email: newUser.email,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { phoneNumber, password } = req.body;

      console.log(req.body);
      const user = await User.findOne({
        where: {
          phoneNumber,
        },
      });

      if (!user) {
        throw { name: "userOrPassNotFound" };
      }

      const validate = comparePassword(password, user.password);
      if (!validate) {
        throw { name: "userOrPassNotFound" };
      }

      const payload = {
        id: user.id,
        email: user.email,
      };

      const access_token = generateToken(payload);

      res.status(200).json({
        statusCode: 200,
        access_token: access_token,
        username: user.username,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = authController;
