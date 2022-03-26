const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

var newYears = "29 Aug 2022";

function otherDates(wantedDate) {
  newYears = wantedDate;
  countdown();
}

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

//Adds a "0" to 1 digit numbers, (excluding days)
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//Pressing the buttons with ENTER
function pressButton() {
  if (document.activeElement === document.getElementById("Ai")) {
    document.getElementById("Ai").click();
  }
  else if (document.activeElement === document.getElementById("Ma")) {
      document.getElementById("Ma").click();
  }
  else if (document.activeElement === document.getElementById("Fy")) {
    document.getElementById("Fy").click();
  }
}

countdown();

setInterval(countdown, 1000)



