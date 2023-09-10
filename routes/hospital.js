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

router.get(
  "/:hospitalId/specializations/:specializationId/doctors",
  hospitalController.getDoctorBySpecialization
);

router.get(
  "/:hospitalId/specializations/:specializationId/filter-doctors/",
  hospitalController.getFilteredDoctors
);
router.get(
  "/:hospitalId/specializations/:specializationId/doctors/:doctorId/working-day",
  hospitalController.getDoctorBySpecializationWorkingDays
);

module.exports = router;
