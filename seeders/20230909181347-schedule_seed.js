"use strict";

let schedules = require("../datas/Schedule.json").map((schedule) => {
  schedule.updatedAt = schedule.createdAt = new Date();
  delete schedule.schedule;
  schedule.HourId = schedule.hoursId;
  delete schedule.hoursId;
  schedule.DoctorId = schedule.doctorId;
  delete schedule.doctorId;

  return schedule;
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Schedules", schedules);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Schedules", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
