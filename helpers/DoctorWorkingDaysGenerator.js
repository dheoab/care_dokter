const fs = require("fs");

const workingDayGenerator = (
  doctorid,
  arrDays,
  shift,
  startShift,
  endShift,
  practiceDuration
) => {
  // Load existing data from the JSON file (if it exists)
  let existingData = [];
  const filePath = "../datas/workingDays.json";

  if (fs.existsSync(filePath)) {
    existingData = JSON.parse(fs.readFileSync(filePath));
  }

  // Generate new data
  let result = [];
  for (let i = 0; i < arrDays.length; i++) {
    result.push({
      DoctorId: doctorid,
      day: arrDays[i],
      shift: shift,
      startShift: startShift,
      endShift: endShift,
      practiceDuration: practiceDuration,
    });
  }

  // Append new data to existing data
  const updatedData = [...existingData, ...result];

  // Write the updated data back to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));

  return updatedData;
};

// const doctorId = 1;
// const arrDays = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const shift = 1;
// const startShift = "10:00";
// const endShift = "13:00";
// const practiceDuration = 30;

// const doctorId = 2;
// const arrDays = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const shift = 2;
// const startShift = "13:00";
// const endShift = "16:00";
// const practiceDuration = 20;

// const doctorId = 3;
// const arrDays = ["Tuesday"];
// const shift = 1;
// const startShift = "16:00";
// const endShift = "18:00";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 3;
// const arrDays = ["Wednesday"];
// const shift = 1;
// const startShift = "08:00";
// const endShift = "12:00";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 3;
// const arrDays = ["Thursday", "Friday"];
// const shift = 1;
// const startShift = "14:00";
// const endShift = "17:00";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 4;
// const arrDays = ["Tuesday"];
// const shift = 1;
// const startShift = "14:00";
// const endShift = "17:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 4;
// const arrDays = ["Saturday"];
// const shift = 1;
// const startShift = "09:00";
// const endShift = "13:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 4;
// const arrDays = ["Saturday"];
// const shift = 2;
// const startShift = "14:30";
// const endShift = "15:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 5;
// const arrDays = ["Saturday"];
// const shift = 1;
// const startShift = "09:00";
// const endShift = "11:00";
// const practiceDuration = 30;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 6;
// const arrDays = [
//   "Monday",
//   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "11:30";
// const endShift = "14:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 6;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   "Thursday",
//   // "Friday",
//   // "Saturday",
// ];
// const shift = 1;
// const startShift = "17:00";
// const endShift = "19:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 6;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   "Friday",
//   // "Saturday",
// ];
// const shift = 1;
// const startShift = "11:30";
// const endShift = "14:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 6;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   "Saturday",
// ];
// const shift = 1;
// const startShift = "14:30";
// const endShift = "16:30";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 6;
// const arrDays = [
//   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "18:00";
// const endShift = "18:40";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

//

// const doctorId = 6;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "11:00";
// const endShift = "11:40";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 6;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 2;
// const startShift = "12:20";
// const endShift = "13:00";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 6;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 3;
// const startShift = "13:40";
// const endShift = "14:20";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 6;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 4;
// const startShift = "15:00";
// const endShift = "15:40";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 6;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 5;
// const startShift = "16:20";
// const endShift = "17:00";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 7;
// const arrDays = [
//   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "18:40";
// const endShift = "19:20";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 7;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "11:40";
// const endShift = "12:20";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 7;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 2;
// const startShift = "13:90";
// const endShift = "13:40";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 7;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 3;
// const startShift = "14:20";
// const endShift = "15:00";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 7;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 4;
// const startShift = "15:40";
// const endShift = "16:20";
// const practiceDuration = 10;

// const doctorId = 9;
// const arrDays = [
//   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "18:00";
// const endShift = "20:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 9;
// const arrDays = [
//   //   "Monday",
//   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "08:00";
// const endShift = "10:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 9;
// const arrDays = [
//   //   "Monday",
//   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 2;
// const startShift = "16:00";
// const endShift = "20:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 9;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "16:00";
// const endShift = "20:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 9;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "08:00";
// const endShift = "10:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 9;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 2;
// const startShift = "16:00";
// const endShift = "20:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 9;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "08:00";
// const endShift = "10:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 9;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   "Friday",
//   //   "Saturday",
// ];
// const shift = 2;
// const startShift = "18:00";
// const endShift = "20:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 9;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   "Saturday",
// ];
// const shift = 1;
// const startShift = "17:00";
// const endShift = "20:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 10;
// const arrDays = [
//   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "17:00";
// const endShift = "20:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 10;
// const arrDays = [
//   //   "Monday",
//   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   "Saturday",
// ];
// const shift = 1;
// const startShift = "13:00";
// const endShift = "16:00";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 10;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "08:00";
// const endShift = "12:00";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 10;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   //   "Saturday",
// ];
// const shift = 2;
// const startShift = "17:00";
// const endShift = "20:00";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 10;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "15:00";
// const endShift = "17:00";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 11;
// const arrDays = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "17:00";
// const endShift = "20:00";
// const practiceDuration = 15;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );

// const doctorId = 21;
// const arrDays = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   //   "Saturday",
// ];
// const shift = 1;
// const startShift = "16:00";
// const endShift = "21:00";
// const practiceDuration = 10;

// workingDayGenerator(
//   doctorId,
//   arrDays,
//   shift,
//   startShift,
//   endShift,
//   practiceDuration
// );
