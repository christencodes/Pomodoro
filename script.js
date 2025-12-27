"use strict";
//  start pause reset

const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

let alarm = new Audio();

const currentTimer = document.getElementById("current-time");

let startPressed = false;

start.addEventListener("click", (e) => {
  e.preventDefault();
  !startPressed ? startTimer() : console.log("timer is going");
});

pause.addEventListener("click", (e) => {
  e.preventDefault();
  pauseTimer();
});

reset.addEventListener("click", () => {
  resetTimer();
});

let timeLeft = 1500;
let timerID;

const updateDisplay = function () {
  //we need to convert time left into [[MM:SS]] format
  // divide seconds by 60 and get the total minutes
  let minutes = "00";
  let seconds = "00";

  minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  seconds = String(timeLeft % 60).padStart(2, "0");

  currentTimer.textContent = `${minutes}:${seconds}`;
  document.title = ` 🍅 ${currentTimer.textContent} `;
};

const startTimer = function () {
  timerID = setInterval(() => {
    timeLeft--;
    updateDisplay();
  }, 1000);
};

const pauseTimer = function () {
  clearInterval(timerID);
};

const resetTimer = function () {
  timeLeft = 1500;
  updateDisplay();
  pauseTimer();
};
