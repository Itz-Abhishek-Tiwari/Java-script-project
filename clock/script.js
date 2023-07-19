"use strict";

let selectHour = document.querySelector(".hour");
let selectMin = document.querySelector(".min");
let selectSec = document.querySelector(".sec");
console.log(selectHour, selectMin, selectSec);
setInterval(() => {
  let date = new Date();

  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  if (hour < 10) {
    selectHour.textContent = "0" + hour;
  } else {
    selectHour.textContent = hour;
  }

  if (min < 10) {
    selectMin.textContent = "0" + min;
  } else {
    selectMin.textContent = min;
  }

  if (sec < 10) {
    selectSec.textContent = "0" + sec;
  } else {
    selectSec.textContent = sec;
  }
}, 1000);
