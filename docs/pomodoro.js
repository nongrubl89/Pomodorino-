function Timer(mins) {
  this.mins = mins;
  this.secs = mins * 60;
  this.minutesTimer = this.minutesTimer;
  this.secondsTimer = this.secondsTimer;
  this.timerRunning = false;
  this.breakTime = false;

  this.currentSeconds = function () {
    let s = this.secs - Math.round(this.mins * 60);
    return s.toString().padStart(2, 0);
  };
  this.currentMinutes = function () {
    pomodoroTimer.mins = Math.floor(pomodoroTimer.secs / 60);
    return pomodoroTimer.mins;
  };
}

const pomodoroTimer = new Timer(25);
console.log(pomodoroTimer);

function decrementTimer() {
  minutes.innerHTML =
    pomodoroTimer.currentMinutes() + ":" + pomodoroTimer.currentSeconds();
  minutes.value = pomodoroTimer.currentMinutes();
  pomodoroTimer.secs--;
  pomodoroTimer.secondsTimer = setTimeout("decrementTimer()", 1000);

  if (pomodoroTimer.mins === 0 && pomodoroTimer.secs === 0) {
    clearInterval(pomodoroTimer.minutesTimer);
    clearInterval(pomodoroTimer.secondsTimer);
    console.log("time for a break");
    startBreak();
  }
}

function startBreak() {
  pomodoroTimer.breakTime = true;
  pomodoroTimer.mins = 5;
  pomodoroTimer.secs = pomodoroTimer.mins * 60;
  minutes.innerHTML =
    pomodoroTimer.currentMinutes() + ":" + pomodoroTimer.currentSeconds();
  pomodoroTimer.secs--;
  pomodoroTimer.secondsTimer = setTimeout("decrementTimer()", 1000);
}

function startTimer() {
  pomodoroTimer.minutesTimer = setTimeout("decrementTimer()", 60);
}

function newTimer() {
  minutes.innerHTML = "25:00";
  pomodoroTimer.mins = 25;
  pomodoroTimer.secs = pomodoroTimer.mins * 60;
  clearInterval(pomodoroTimer.minutesTimer);
  clearInterval(pomodoroTimer.secondsTimer);
}

function pauseTimer() {
  clearInterval(pomodoroTimer.minutesTimer);
  clearInterval(pomodoroTimer.secondsTimer);
}

function addTime() {
  ++pomodoroTimer.mins;
  minutes.innerHTML = pomodoroTimer.mins + ":00";
  pomodoroTimer.secs = pomodoroTimer.mins * 60;
  console.log(pomodoroTimer.mins);
  console.log(pomodoroTimer.secs);
  console.log(pomodoroTimer.mins.value);
  //   pomodoroTimer.mins.value = pomodoroTimer.currentMinutes();
}

function reduceTime() {
  pomodoroTimer.mins--;
  minutes.innerHTML = pomodoroTimer.mins + ":00";
  pomodoroTimer.secs = pomodoroTimer.mins * 60;
  console.log(minutes.innerHTML);
}

function showAboutBlurb() {
  const aboutBlurb = document.getElementById("show");
  console.log(aboutBlurb);
  aboutBlurb.className === "pomodoro-about"
    ? (aboutBlurb.className = "pomodoro-about-show")
    : (aboutBlurb.className = "pomodoro-about");
}

let minutes = document.getElementById("minutes");
const reset = document.getElementById("reset");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const add = document.getElementById("add");
const reduce = document.getElementById("subtract");
const moreButton = document.querySelector(".more-text");
minutes.innerHTML =
  pomodoroTimer.currentMinutes() + ":" + pomodoroTimer.currentSeconds();
//seconds.innerHTML=currentSeconds();

reset.addEventListener("click", () => {
  newTimer();
});

start.addEventListener("click", () => {
  startTimer();
  timerRunning = true;
  console.log(timerRunning);
});

pause.addEventListener("click", () => {
  pauseTimer();
});

add.addEventListener("click", () => {
  addTime();
});

reduce.addEventListener("click", () => {
  reduceTime();
});

moreButton.addEventListener("click", () => {
  showAboutBlurb();
});

//4 rounds of work then a longer break(10 minutes);
//a question mark that onhover gives user an overview of the pomodoro techinique
//a semi-circle progress bar over the clock or an analog tracker option
//
