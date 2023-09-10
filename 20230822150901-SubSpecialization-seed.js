"use strict";

const subSpecialization = require("../datas/SubSpecialization.json").map(
  (sub) => {
    sub.createdAt = sub.updatedAt = new Date();

    return sub;
  }
);

console.log(subSpecialization);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("SubSpecialization", subSpecialization);
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
    await queryInterface.bulkDelete("SubSpecialization", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
