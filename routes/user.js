const express = require("express");
const userController = require("../controllers/usersControl");

const router = express.Router();

router.get("/points", userController.getPoints);

router.get("/family-members", userController.getFamilyMembers);

router.get("/:userId/on-going-bookings", userController.getUserOnGoingBookings);

router.get("/:userId/done-bookings", userController.getUserDoneBookings);

router.get("/:userId/booking/:bookingId", userController.getUserBookingsDetail);

module.exports = router;
