const getDatesBetween = require("./getDatesBetweenFunction");

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function generateDoctorSchedule(inputData, startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dates = getDatesBetween(start, end);
  const combinedData = [];

  dates.forEach((date) => {
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const dayData = inputData.find(
      (item) => item.day.toLowerCase() === dayName.toLowerCase()
    );

    if (dayData) {
      const formattedDate = formatDate(date);

      const daySchedule = {
        day: dayName,
        date: formattedDate,
        practiceDuration: dayData.practiceDuration,
      };

      Object.keys(dayData).forEach((key) => {
        if (key.startsWith("shift")) {
          const [shiftNum] = key.match(/\d+/);
          const shiftKey = key;
          daySchedule[shiftKey] = {
            time: dayData[shiftKey],
            schedule: [],
          };

          const [startTime, endTime] = dayData[shiftKey].split(" - ");
          const shiftStart = new Date(date);
          shiftStart.setHours(Number(startTime.split(":")[0]));
          shiftStart.setMinutes(Number(startTime.split(":")[1]));
          const shiftEnd = new Date(date);
          shiftEnd.setHours(Number(endTime.split(":")[0]));
          shiftEnd.setMinutes(Number(endTime.split(":")[1]));
          const practiceDuration = dayData.practiceDuration
            .split(":")
            .map(Number);
          let currentTime = new Date(shiftStart);

          while (currentTime < shiftEnd) {
            // Change condition to exclude the shift end time
            daySchedule[shiftKey].schedule.push(
              currentTime.toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
              })
            );
            currentTime.setMinutes(
              currentTime.getMinutes() + practiceDuration[1]
            );
          }
        }
      });

      combinedData.push(daySchedule);
    }
  });

  return combinedData;
}

module.exports = generateDoctorSchedule;
