function transformScheduleData(inputData) {
  const transformedData = [];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Create an object to hold the schedule for each day
  const scheduleByDay = {};

  inputData.forEach((schedule) => {
    const { days, startShift, endShift, shift, practiceDuration } = schedule;
    const dayName = daysOfWeek[daysOfWeek.indexOf(days)]; // Normalize day name

    // Create or update the schedule for the day
    if (!scheduleByDay[dayName]) {
      scheduleByDay[dayName] = {
        practiceDuration,
      };
    }

    // Add the shift time to the corresponding shift
    scheduleByDay[dayName][`shift${shift}`] = `${startShift} - ${endShift}`;
  });

  // Convert the scheduleByDay object into an array
  Object.keys(scheduleByDay).forEach((dayName) => {
    const scheduleForDay = {
      day: dayName,
      ...scheduleByDay[dayName],
    };
    transformedData.push(scheduleForDay);
  });

  return transformedData;
}

module.exports = transformScheduleData;
