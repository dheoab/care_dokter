const express = require("express");
const hospitalController = require("../controllers/hospitalsControl");
const router = express.Router();

router.get("/", hospitalController.getHospitals);
router.get(
  "/:hospitalId/specializations",
  hospitalController.getSearchSpecializations
);
router.get(
  "/:hospitalId/doctors",
  hospitalController.getSearchDoctorbySpecialization
);

module.exports = router;
