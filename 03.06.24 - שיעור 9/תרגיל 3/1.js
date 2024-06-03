const resetButton = document.getElementsByClassName("reset-button");

const hoursDiv = document.getElementsByClassName("hours-div");
const minutesDiv = document.getElementsByClassName("minutes-div");
const secondsDiv = document.getElementsByClassName("seconds-div");

const startButton = document.getElementsByClassName("start-button");
const stopButton = document.getElementsByClassName("stop-button");

resetButton[0].addEventListener("click", resetClock);

let timerId
startButton[0].addEventListener("click", ()=>startClock());
stopButton[0].addEventListener("click", ()=>clearTimeout(timerId));

function startClock(){
  timerFunc(0)
}








function resetClock() {
  hoursDiv[0].textContent = "00";
  minutesDiv[0].textContent = "00";
  secondsDiv[0].textContent = "00";
}

function timerFunc(sec) {
  if (sec === 86400) {
    return;
  } else {
    console.log((sec < 10) ? "0" + sec:sec);
    secondsDiv[0].textContent = (sec < 10) ? "0" + sec:sec;
    timerId = setTimeout(() => timerFunc(sec + 1), 1000);
  }
}



