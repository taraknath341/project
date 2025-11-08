"use strict";
// Sound
const sound = {
  diceRed: new Audio("./sound/dice.mp3"),
  diceBlue: new Audio("./sound/dice.mp3"),
  jump: [],
  dieRed: new Audio("./sound/die.mp3"),
  dieBlue: new Audio("./sound/die.mp3"),
  reset: new Audio("./sound/reset.mp3"),
};

for (let q = 12; q; q--) {
  sound.jump.push(new Audio("./sound/jump.mp3"));
}
// লুডোছক্কা_ইমজি 
const লুডোছক্কা_ইমজি_get = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
// database
let countHidden = 0;
let deg = 0;
let deg1 = 0;

let oldDan = 1;
let oldDan1 = 1;
const লুডোছক্কাBtnHidden = function () {
  switch (countHidden) {
    case 0:
      লুডোছক্কা.style.display = "none";
  }
};
const defaultBtn = function (color) {
  for (let count = 1; count <= 49; count++) {
    const a = document.querySelector("#id" + count).innerHTML;
    switch (color) {
      case "r":
        if (a !== '<font style="font-size:2pc;">🔵</font>') {
          document.getElementById("id" + count).textContent = count;
        }
        break;
      case "b":
        if (a !== '<font style="font-size:2pc;">🔴</font>') {
          document.getElementById("id" + count).textContent = count;
        }
    }
    if (count !== 12 && count !== 24 && count !== 28 && count !== 39 && count !== 47) {
      document.getElementById("id" + count).style.backgroundColor = "white";
    }
  }
};

const dan = function (e) {
  document.getElementById("id" + e).innerHTML = '<font style="font-size:2pc;">🔴</font>';
  if (oldDan == oldDan1) {
    document.getElementById("id" + e).style.backgroundColor = "Yellow";
  }
};

let thisInterval, myInterval;
// লুডোছক্কা click
const লুডোছক্কা = document.querySelector("#লুডোছক্কা");
লুডোছক্কা.addEventListener("click", (function () {
  sound.diceRed.play();
  লুডোছক্কা.style.display = "none";
  deg += 360;
  document.querySelector("#resultNumRed").style = `
      transform: rotateY(${deg}deg);
      rotate: ${deg}deg;
    `;

  const numRan = Math.ceil(Math.random() * 6);
  document.querySelector("#resultNumRed").textContent = লুডোছক্কা_ইমজি_get[numRan - 1];
  // Loop 
  let countt = 0;
  myInterval = setInterval(() => {
    countt++;
    oldDan++;
    sound.jump[countt - 1].play();
    if (numRan === countt) {
      switch (oldDan) {
        case 12:
        case 24:
        case 28:
        case 39:
        case 47:
          sound.dieRed.play();
          oldDan = 1;
      }
      লুডোছক্কা1.style.display = "";
      clearInterval(myInterval);
    }
    if (oldDan >= 49) {
      oldDan = 49;
    }
    switch (oldDan) {
      case 49:
        alert("Red Win");
        লুডোছক্কা1.style.display = "";
        clearInterval(myInterval);
        clearInterval(thisInterval);
        reset();
    }
    defaultBtn('r');

    dan(oldDan);
    dan1(oldDan1);
  }, 350)
}));

const dan1 = function (e) {
  document.getElementById("id" + e).innerHTML = '<font style="font-size:2pc;">🔵</font>';
  if (oldDan == oldDan1) {
    document.getElementById("id" + e).style.backgroundColor = "Yellow";
  }
};

// লুডোছক্কা1 click
const লুডোছক্কা1 = document.querySelector("#লুডোছক্কা1");
লুডোছক্কা1.addEventListener("click", (function () {
  sound.diceBlue.play();
  deg1 += 360;
  document.querySelector("#resultNumBlue").style = `
    transform: rotateY(${deg1}deg);
    rotate: ${deg1}deg;`;
  const numRan = Math.ceil(Math.random() * 6);
  document.querySelector("#resultNumBlue").textContent = লুডোছক্কা_ইমজি_get[numRan - 1];
  লুডোছক্কা1.style.display = "none";
  // loop
  let countq = 0;
  thisInterval = setInterval(() => {
    countq++;
    oldDan1++;
    sound.jump[countq + 5].play();
    if (numRan === countq) {
      switch (oldDan1) {
        case 12:
        case 24:
        case 28:
        case 39:
        case 47:
          sound.dieBlue.play();
          oldDan1 = 1;
      }
      লুডোছক্কা.style.display = "";
      clearInterval(thisInterval);
    }
    if (oldDan1 >= 49) {
      oldDan1 = 49;
    }
    switch (oldDan1) {
      case 49:
        alert("Blue Win");
        লুডোছক্কা.style.display = "";
        clearInterval(myInterval);
        clearInterval(thisInterval);
        reset();
    }
    defaultBtn('b');
    dan1(oldDan1);
    dan(oldDan);
  }, 350)
}));
const reset = function () {
  sound.reset.play();
  countHidden = 0;
  oldDan = 1;
  oldDan1 = 1;
  defaultBtn("r");
  defaultBtn("b");
  document.querySelector("#resultNumRed").textContent = "⚀";
  document.querySelector("#resultNumBlue").textContent = "⚀";
  alert("New Game Started!");
  dan(oldDan);
  dan1(oldDan1);
}

লুডোছক্কা1.style.display = "none";
dan(oldDan);
dan1(oldDan1);
