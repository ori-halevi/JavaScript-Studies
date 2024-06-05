const dayOfTheWeekDiv = document.getElementsByClassName("day-of-the-week-div");

const hoursDiv = document.getElementsByClassName("hours-div");
const minutesDiv = document.getElementsByClassName("minutes-div");
const secondsDiv = document.getElementsByClassName("seconds-div");

const amPmDiv = document.getElementsByClassName("am-pm-div");

setInterval(() => {
  showTime();
}, 1000);

function showTime() {
  let hours = new Date().getHours();
  let twelveHourClock = "am";
  if (hours > 12) {
    hours = hours - 12;
    twelveHourClock = "pm";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  let dayOfTheWeek = new Date().getDay();

  let minutes = new Date().getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let seconds = new Date().getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  dayOfTheWeekDiv[0].textContent = idxToStrDay(dayOfTheWeek);

  hoursDiv[0].textContent = hours;
  minutesDiv[0].textContent = minutes;
  secondsDiv[0].textContent = seconds;
  amPmDiv[0].textContent = twelveHourClock;
}

function idxToStrDay(dayIdx) {
  if (dayIdx === 0) return "Sunday";
  else if (dayIdx === 1) return "Monday";
  else if (dayIdx === 2) return "Tuesday";
  else if (dayIdx === 3) return "Wednesday";
  else if (dayIdx === 5) return "Thursday";
  else if (dayIdx === 6) return "Friday";
  else if (dayIdx === 4) return "Saturday";
}
