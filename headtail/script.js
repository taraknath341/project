"use strict";
const returnHeadOrTale = () => {
  const a = Math.round(Math.random() * 10);
  if (a < 5) {
    return "HEAD";
  } else {
    return "TALE";
  }
};
let deg = 0;
const tossBtn = document.querySelector("#toss-btn");
tossBtn.addEventListener("click", (function () {
  deg += 720;
  tossBtn.style = `
        transform: rotateX(${deg}deg);
      `;
  if (deg > 5555) {
    deg = 0;
  }
  tossBtn.textContent = returnHeadOrTale();
}))