const fs = require("fs");
const timeInterval = require("../datas/timeIntervals.json");
const doctors = require("../datas/Doctors.json");

function getTimeRange(startHour, endHour, minuteInterval) {
  const timeArray = [];

  const [startHourValue, startMinute] = startHour.split(":").map(Number);
  const [endHourValue, endMinute] = endHour.split(":").map(Number);

  let currentHour = startHourValue;
  let currentMinute = startMinute;

  while (
    currentHour < endHourValue ||
    (currentHour === endHourValue && currentMinute <= endMinute)
  ) {
    const formattedHour = currentHour.toString().padStart(2, "0");
    const formattedMinute = currentMinute.toString().padStart(2, "0");
    const formattedTime = `${formattedHour}:${formattedMinute}`;

    timeArray.push(formattedTime);

    currentMinute += minuteInterval;
    if (currentMinute >= 60) {
      currentHour++;
      currentMinute -= 60;
    }
  }

  return timeArray;
}

const startHour = "08:30";
const endHour = "11:30";
const minuteInterval = 30;

const result = getTimeRange(startHour, endHour, minuteInterval);
console.log(result); // Output: [ '08:30', '09:00', '09:30', '10:00', '10:30', '11:00' ]

function scheduleGenerator(
  date,
  doctorId,
  hourStart,
  hourEnd,
  session,
  minuteInterval = 10
) {
  let timeRange = getTimeRange(hourStart, hourEnd, minuteInterval);

  let schedules = [];

  for (let i = 0; i < timeInterval.length; i++) {
    for (let j = 0; j < timeRange.length; j++) {
      if (timeInterval[i].time == timeRange[j]) {
        schedules.push({
          doctorId: doctorId,
          date: date,
          hoursId: timeInterval[i].id,
          schedule: `${date}T${timeInterval[i].time}:00Z`,
        });
      }
    }
  }

  let doctor = doctors.find((doctor) => doctor.id === doctorId);
  let doctorName = `${doctor.fristName} ${doctor.lastName}`;
  let formattedName = doctorName.replace(/[. ]/g, "");

  const folderPath = "../datas/doctorSchedules";
  const fileName = `${formattedName}-${session}-[${date}]-[${hourStart}-${hourEnd}]`;

  const filePath = `${folderPath}/${fileName}`;

  console.log(fileName, "<<<<");

  fs.writeFile(filePath, JSON.stringify(schedules, null, 2), (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
    } else {
      console.log(`JSON data has been written to ${filePath}`);
    }
  });

  return schedules;
}

//Dokter Edward Surjono ID 3

// scheduleGenerator("2023-08-29", 3, "16:00", "17:50", 1, 10);

// scheduleGenerator("2023-08-30", 3, "08:00", "11:50", 1, 10);

// scheduleGenerator("2023-08-31", 3, "14:00", "16:50", 1, 10);

// //Dokter Fransisca ID 4

// scheduleGenerator("2023-08-29", 4, "14:00", "16:45", 1, 15);

// scheduleGenerator("2023-09-02", 4, "09:00", "12:45", 1, 15);

// scheduleGenerator("2023-09-02", 4, "14:30", "14:45", 2, 15);

// const id = 5;
// const interval = 30;

// scheduleGenerator("2023-09-02", id, "09:00", "10:30", 1, interval);

// scheduleGenerator("2023-09-09", id, "09:00", "10:30", 1, interval);

// scheduleGenerator("2023-09-16", id, "09:00", "10:30", 1, interval);

// const id = 6;
// const interval = 50;

// scheduleGenerator("2023-08-29", id, "11:30", "13:45", 1, interval);

// scheduleGenerator("2023-08-30", id, "17:00", "18:45", 1, interval);

// scheduleGenerator("2023-08-31", id, "11:00", "12:45", 1, interval);

// const id = 7;
// const interval = 10;

// scheduleGenerator("2023-08-31", id, "11:00", "11:20", 1, interval);

// scheduleGenerator("2023-08-31", id, "12:20", "12:40", 2, interval);

// scheduleGenerator("2023-08-31", id, "13:40", "14:10", 3, interval);

// scheduleGenerator("2023-08-31", id, "15:00", "15:20", 4, interval);

// scheduleGenerator("2023-08-31", id, "16:20", "16:50", 5, interval);

// const id = 8;
// const interval = 10;

// scheduleGenerator("2023-08-31", id, "11:40", "12:10", 1, interval);

// scheduleGenerator("2023-08-31", id, "13:00", "13:20", 2, interval);

// scheduleGenerator("2023-08-31", id, "14:20", "14:40", 3, interval);

// scheduleGenerator("2023-08-31", id, "15:40", "16:00", 4, interval);

// const id = 9;
// const interval = 15;

// scheduleGenerator("2023-08-29", id, "08:00", "09:45", 1, interval);

// scheduleGenerator("2023-08-29", id, "16:00", "19:40", 2, interval);

// scheduleGenerator("2023-08-30", id, "16:00", "19:45", 1, interval);

// scheduleGenerator("2023-08-31", id, "08:00", "09:45", 1, interval);

// scheduleGenerator("2023-08-31", id, "18:00", "19:45", 2, interval);

// const id = 10;
// const interval = 10;

// scheduleGenerator("2023-08-29", id, "13:00", "15:50", 1, interval);

// scheduleGenerator("2023-08-30", id, "08:00", "11:50", 1, interval);

// scheduleGenerator("2023-08-30", id, "17:00", "19:50", 2, interval);

// scheduleGenerator("2023-09-01", id, "15:00", "16:50", 1, interval);

// const id = 11;
// const interval = 15;

// scheduleGenerator("2023-08-30", id, "14:00", "15:45", 1, interval);

// scheduleGenerator("2023-08-31", id, "14:00", "18:45", 1, interval);

// scheduleGenerator("2023-09-01", id, "17:00", "19:45", 1, interval);

// const id = 12;
// const interval = 15;

// scheduleGenerator("2023-08-28", id, "17:00", "19:45", 1, interval);

// scheduleGenerator("2023-08-30", id, "17:00", "19:45", 1, interval);

// scheduleGenerator("2023-09-02", id, "12:00", "14:45", 1, interval);
