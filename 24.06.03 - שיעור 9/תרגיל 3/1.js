const resetButton = document.getElementsByClassName("reset-button")[0];

const hoursDiv = document.getElementsByClassName("hours-div")[0];
const minutesDiv = document.getElementsByClassName("minutes-div")[0];
const secondsDiv = document.getElementsByClassName("seconds-div")[0];
const runningColor = document.getElementsByClassName("running-color");

const startButton = document.getElementsByClassName("start-button")[0];
const stopButton = document.getElementsByClassName("stop-button")[0];

stopButton.disabled = true;
stopButton.style.opacity = "0.5";
resetButton.disabled = true;
resetButton.style.opacity = "0.5";

resetButton.addEventListener("click", resetClock);

let timerId;
startButton.addEventListener("click", () => startClock());
stopButton.addEventListener("click", () => stopClock());

function startClock() {
  for (const element of runningColor) element.style.color = "#1bd818";
  startButton.disabled = true;
  startButton.style.opacity = "0.5";
  stopButton.disabled = false;
  stopButton.style.opacity = "100";
  resetButton.disabled = true;
  resetButton.style.opacity = "0.5";
  timerFunc(0, stopClock);
}

function stopClock() {
  clearTimeout(timerId);
  for (const element of runningColor) element.style.color = "red";
  stopButton.disabled = true;
  stopButton.style.opacity = "0.5";
  resetButton.disabled = false;
  resetButton.style.opacity = "100";
}

function resetClock() {
  for (const element of runningColor) element.style.color = "black";
  hoursDiv.textContent = "00";
  minutesDiv.textContent = "00";
  secondsDiv.textContent = "00";
  startButton.disabled = false;
  startButton.style.opacity = "100";
  resetButton.disabled = true;
  resetButton.style.opacity = "0.5";
}

function updateWeb(sec) {
  let time = getTime(sec);
  secondsDiv.textContent = time[0];
  minutesDiv.textContent = time[1];
  hoursDiv.textContent = time[2];
}

function getTime(sec) {
  let min = Number(0);
  let hour = Number(0);

  if (sec > 59) {
    min = Math.floor(sec / 59);
    sec = sec % 59;
  }
  if (min > 59) {
    hour = Math.floor(min / 59);
    min = min % 59;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  return [sec, min, hour];
}

function timerFunc(sec, callBack) {
  if (sec === 86400) {
    // 86400 is 24H
    callBack();
    return;
  } else {
    // console.log(sec < 10 ? "0" + sec : sec);
    updateWeb(sec);
    timerId = setTimeout(() => timerFunc(sec + 1, callBack), 1000);
  }
}
