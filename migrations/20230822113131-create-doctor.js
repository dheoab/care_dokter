"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Doctors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fristName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      SubSpecializationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "SubSpecializations",
          key: "id",
        },
      },
      SpecializationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Specializations",
          key: "id",
        },
      },
      HospitalId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Hospitals",
          key: "id",
        },
      },
      gender: {
        type: Sequelize.STRING,
      },
      imgUrl: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Doctors");
  },
};
