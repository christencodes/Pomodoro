/* 
1. Basic Pomodoro counter features
a. 25 minute study
  1.display timer
  2.pause button
b. 5 minute break or 10 minute break

//look up - setTimeOut() and setInterval();


2. Expand on those

*/
"use strict";

// const datePlayground = new Date();
// // console.log(datePlayground);
// console.log(datePlayground.getSeconds());

const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");

seconds.textContent = "00";
minutes.textContent = "25";

function timerUI() {}

//once the seconds reaches 0 we subtract 1 from minutes

const Timer = {
  interval: 1000,
  currentSeconds: 0,
  currentMinutes: 0,
  start() {
    this.updateSeconds();
  },
  stop() {
    //sets everything to 0
    this.currentMinutes = 0;
    this.currentSeconds = 0;
  },
  updateSeconds() {
    this.currentSeconds--;
    if (this.currentSeconds == 0) {
      this.currentSeconds = 59;
      this.updateMinutes();
    }
  },
  updateMinutes() {
    this.currentMinutes--;
    if (this.currentMinutes == 0) {
      this.stop();
    }
  },
};
