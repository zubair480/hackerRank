// Time conversion
function timeConversion(s) {
  // It will split our string into an array of strings 00 : 00 : 00 PM
  s = s.split(":");
  //   It will convert string of hours in integer format
  let hours = parseInt(s[0]);
  // It will show our PM or AM
  let timeFrame = s[2].slice(2);
  // It will show seconds. || minutes will be kept as it is.
  let seconds = s[2].slice(0, 2);
  if (timeFrame === "PM" && hours !== 12) {
    hours += 12;
  }
  if (hours === 12 && timeFrame === "AM") {
    hours = "00";
  } else if (hours < 10) {
    hours = "0" + hours.toString();
  } else {
    hours = hours.toString();
  }
  console.log([hours, s[1], seconds].join(":"));
}
timeConversion("11:05:45PM");
