const {
  User,
  UsersFamily,
  Booking,
  WorkingDay,
  Doctor,
  Hospital,
  Specialization,
} = require("../models/index");

class userController {
  static async getPoints(req, res, next) {
    try {
      const { id } = req.user;
      const user = await User.findByPk(id, {
        attributes: ["id", "userPoint"],
      });
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getFamilyMembers(req, res, next) {
    try {
      const { id } = req.user;
      const userFamilies = await User.findByPk(id, {
        attributes: ["id", "email"],
        include: [
          {
            model: UsersFamily,
            attributes: ["frontName", "lastName"],
          },
        ],
      });

      const data = userFamilies.UsersFamilies.map((e) => {
        return `${e.frontName} ${e.lastName}`;
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getUserOnGoingBookings(req, res, next) {
    try {
      const { userId } = req.params;

      const userBookings = await Booking.findAll({
        where: {
          UserId: userId,
          status: "on-going",
        },
        attributes: ["status", "dateBooked"],
        include: [
          {
            model: WorkingDay,
            attributes: ["id"],
            include: [
              {
                model: Doctor,
                attributes: ["fristName", "lastName", "title"],
                include: [
                  {
                    model: Hospital,
                    attributes: ["name"],
                  },
                ],
              },
            ],
          },
        ],
      });

      res.status(200).json(userBookings);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getUserDoneBookings(req, res, next) {
    try {
      const { userId } = req.params;

      const userBookingHistory = await Booking.findAll({
        where: {
          UserId: userId,
          status: "done",
        },
        attributes: ["status", "dateBooked"],
        include: [
          {
            model: WorkingDay,
            attributes: ["id"],
            include: [
              {
                model: Doctor,
                attributes: ["fristName", "lastName", "title"],
                include: [
                  {
                    model: Hospital,
                    attributes: ["name"],
                  },
                ],
              },
            ],
          },
        ],
      });
      res.status(200).json(userBookingHistory);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getUserBookingsDetail(req, res, next) {
    try {
      const { userId, bookingId } = req.params;

      const bookingDetail = await Booking.findOne({
        where: {
          UserId: userId,
          id: bookingId,
        },
        attributes: ["status", "dateBooked", "bookingCode", "note"],
        include: [
          {
            model: UsersFamily,
            attributes: ["frontName", "lastName"],
            include: [
              {
                model: User,
                attributes: ["email", "phoneNumber"],
              },
            ],
          },
          {
            model: WorkingDay,
            attributes: ["id"],
            include: [
              {
                model: Doctor,
                attributes: ["fristName", "lastName", "title"],
                include: [
                  {
                    model: Hospital,
                    attributes: ["name"],
                  },
                  {
                    model: Specialization,
                    attributes: ["name"],
                  },
                ],
              },
            ],
          },
        ],
      });
      res.status(200).json(bookingDetail);
    } catch (error) {}
  }
}

module.exports = userController;
