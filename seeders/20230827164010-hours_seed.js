"use strict";

let hours = require("../datas/timeIntervals.json").map((hour) => {
  hour.createdAt = hour.updatedAt = new Date();
  hour.clocking = hour.time;
  delete hour.id;
  delete hour.time;

  return hour;
});

console.log(hours);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Hours", hours);
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
    await queryInterface.bulkDelete("Hours", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
