const fs = require("fs");
function generateTimeInterval(intervalMinutes, numIntervals) {
  const timeIntervals = [];

  for (let i = 0; i < numIntervals; i++) {
    const hours = Math.floor((i * intervalMinutes) / 60);
    const minutes = (i * intervalMinutes) % 60;
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}`;

    timeIntervals.push({ id: i + 1, time: formattedTime });
  }

  return timeIntervals;
}

const intervalMinutes = 10;
const numIntervals = (24 * 60) / intervalMinutes;

const jsonTimeIntervals = generateTimeInterval(intervalMinutes, numIntervals);

const folderPath = "../datas";
const fileName = "timeIntervals.json";

const filePath = `${folderPath}/${fileName}`;

fs.writeFile(filePath, JSON.stringify(jsonTimeIntervals, null, 2), (err) => {
  if (err) {
    console.error("Error writing JSON file:", err);
  } else {
    console.log(`JSON data has been written to ${filePath}`);
  }
});
