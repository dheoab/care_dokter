const {
  Hospital,
  Specialization,
  SubSpecialization,
  Doctor,
  WorkingDay,
} = require("../models/index");

const transformScheduleData = require("../helpers/doctorWorkingDaysFormater");
const generateDoctorSchedule = require("../helpers/doctorScheduleFunction");

const { Op } = require("sequelize");

class hospitalController {
  static async getHospitals(req, res, next) {
    try {
      const hospitals = await Hospital.findAll({
        attributes: {
          exclude: ["id", "createdAt", "updatedAt"],
        },
      });
      res.status(200).json(hospitals);
    } catch (error) {
      next(error);
    }
  }

  static async getSearchSpecializations(req, res, next) {
    try {
      const { hospitalId } = req.params;
      const { keyword } = req.query;

      if (!keyword) {
        const specializations = await Specialization.findAll({
          where: {
            HospitalId: hospitalId,
          },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        res.status(200).json(specializations);
      } else {
        const specializations = await Specialization.findAll({
          where: {
            [Op.and]: [
              { HospitalId: hospitalId },
              {
                [Op.or]: [{ name: { [Op.iLike]: `%${keyword}%` } }],
              },
            ],
          },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        if (specializations.length === 0) {
          res.status(200).json({ msg: "specialization not found" });
        } else {
          res.status(200).json(specializations);
        }
      }
    } catch (error) {
      next(error);
    }
  }
  static async getSearchDoctor(req, res, next) {
    try {
      const { hospitalId } = req.params;
      const { keyword } = req.query;

      // console.log("masuk", keyword);
      let whereCondition = {
        HospitalId: hospitalId,
        [Op.or]: [
          {
            fristName: {
              [Op.iLike]: `%${keyword}%`,
            },
          },
          {
            lastName: {
              [Op.iLike]: `%${keyword}%`,
            },
          },
        ],
      };

      const doctorsByName = await Doctor.findAll({
        where: whereCondition,
        attributes: ["fristName", "lastName", "title", "telecom"],
        include: [
          {
            model: Specialization,
            attributes: ["name"],
          },
        ],
      });

      const doctorBySpecialization = await Doctor.findAll({
        where: {
          HospitalId: hospitalId,
        },
        attributes: ["fristName", "lastName", "title", "telecom"],
        include: [
          {
            model: Specialization,
            attributes: ["name"],
            where: {
              name: {
                [Op.iLike]: `%${keyword}%`,
              },
            },
          },
        ],
      });

      const data = [...doctorsByName, ...doctorBySpecialization];

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async getDoctorBySpecialization(req, res, next) {
    try {
      const { hospitalId, specializationId } = req.params;

      const doctors = await Doctor.findAll({
        where: {
          HospitalId: hospitalId,
          SpecializationId: specializationId,
        },
        attributes: ["fristName", "lastName", "title", "telecom"],
        include: [
          {
            model: Specialization,
            attributes: ["name"],
          },
          {
            model: SubSpecialization,
            attributes: ["name"],
          },
        ],
      });
      res.status(200).json(doctors);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getDoctorBySpecializationWorkingDays(req, res, next) {
    const { doctorId } = req.params;

    try {
      const DoctorsWorkingDays = await WorkingDay.findAll({
        where: {
          DoctorId: doctorId,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      const transformedData = transformScheduleData(DoctorsWorkingDays);

      res.status(200).json(transformedData);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getFilteredDoctors(req, res, next) {
    try {
      const { hospitalId, specializationId } = req.params;
      const {
        subspecializationId,
        practiceDay,
        practiceTime,
        telecomunication,
        gender,
      } = req.query;

      const whereCondition = {
        HospitalId: hospitalId,
        SpecializationId: specializationId,
      };

      if (subspecializationId) {
        whereCondition.SubSpecializationId = {
          [Op.in]: subspecializationId.split(","),
        };
      }

      if (gender) {
        whereCondition.gender = {
          [Op.in]: gender.split(","),
        };
      }

      if (telecomunication) {
        whereCondition.telecom = {
          [Op.in]: telecomunication.split(","),
        };
      }

      const includeCondition = [
        {
          model: Specialization,
          attributes: ["name"],
        },
        {
          model: SubSpecialization,
          attributes: ["name"],
        },
        {
          model: WorkingDay,
          attributes: ["id"],
        },
      ];

      // Conditionally add practiceDay filter(s)
      if (practiceDay) {
        const practiceDaysArray = practiceDay.split(",");
        includeCondition.push({
          model: WorkingDay,
          where: {
            days: {
              [Op.in]: practiceDaysArray,
            },
          },
        });
      }

      // Conditionally add practiceTime filter
      if (practiceTime) {
        let startShift, endShift;

        // Determine the time range based on practiceTime
        switch (practiceTime) {
          case "morning":
            startShift = "08:00";
            endShift = "12:00";
            break;
          case "afternoon":
            startShift = "12:00";
            endShift = "16:00";
            break;
          case "evening":
            startShift = "16:00";
            endShift = "20:00";
            break;
          default:
            // Handle invalid practiceTime value here
            break;
        }

        // Add the time range to the WorkingDay include
        includeCondition.push({
          model: WorkingDay,
          where: {
            startShift: {
              [Op.lte]: endShift,
            },
            endShift: {
              [Op.gte]: startShift,
            },
          },
        });
      }

      const doctors = await Doctor.findAll({
        where: whereCondition,
        attributes: ["fristName", "lastName", "title", "telecom"],
        include: includeCondition,
      });

      const doctorsWithoutWorkingDays = doctors.map((doctor) => {
        delete doctor.dataValues.WorkingDays;

        return doctor;
      });

      res.status(200).json(doctorsWithoutWorkingDays);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getSpecificDoctor(req, res, next) {
    try {
      const { hospitalId, specializationId, doctorId } = req.params;

      const doctor = await Doctor.findAll({
        where: {
          HospitalId: hospitalId,
          SpecializationId: specializationId,
          id: doctorId,
        },
      });
      res.status(200).json(doctor);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getSpecificDoctorSchedule(req, res, next) {
    try {
      const { doctorId } = req.params;
      let { startDate, endDate } = req.query;

      function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
      }

      if (!startDate) {
        startDate = formatDate(new Date());
      }
      console.log(startDate, "XXXX");

      if (!endDate) {
        endDate = new Date();
        endDate.setDate(endDate.getDate() + 7);
        endDate = formatDate(endDate);
      }
      console.log(endDate, "YYY");

      let DoctorsWorkingDays = await WorkingDay.findAll({
        where: {
          DoctorId: doctorId,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      DoctorsWorkingDays = transformScheduleData(DoctorsWorkingDays);

      const doctorSchedule = generateDoctorSchedule(
        DoctorsWorkingDays,
        startDate,
        endDate
      );

      res.status(200).json(doctorSchedule);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = hospitalController;
