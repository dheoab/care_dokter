"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("WorkingDays", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      days: {
        type: Sequelize.STRING,
      },
      shift: {
        type: Sequelize.INTEGER,
      },
      startShift: {
        type: Sequelize.STRING,
      },
      endShift: {
        type: Sequelize.STRING,
      },
      practiceDuration: {
        type: Sequelize.TIME,
      },
      DoctorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "WorkingDays",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("WorkingDays");
  },
};
