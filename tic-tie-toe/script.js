
"use strict";
let play_ground = document.getElementsByClassName("play-ground");
let score = document.getElementById("score");
let countA = 0;
const scoreData = {
  X: 0,
  O: 0,
  up: function (par) {
    this[par]++;
  },
  show: function () {
    score.innerText = `X = ${scoreData.X} || O = ${scoreData.O}`;
  }
};
const playerTurn = () => {
  switch (countA) {
    case 0:
      countA++;
      return "X";
    case 1:
      countA--;
      return "O";
  }
};
const data = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  rm: function () {
    for (let count = 1; count < 10; count++) {
      data[count] = "null";
    }
  },
};
const btn = (a) => {
  switch (a) {
    case 1:
      if (data[1] == "") {
        let pt = playerTurn();
        play_ground[0].textContent = pt;
        data[1] = pt;
      }
      break;
    case 2:
      if (data[2] == "") {
        let pt = playerTurn();
        play_ground[1].textContent = pt;
        data[2] = pt;
      }
      break;
    case 3:
      if (data[3] == "") {
        let pt = playerTurn();
        play_ground[2].textContent = pt;
        data[3] = pt;
      }
      break;
    case 4:
      if (data[4] == "") {
        let pt = playerTurn();
        play_ground[3].textContent = pt;
        data[4] = pt;
      }
      break;
    case 5:
      if (data[5] == "") {
        let pt = playerTurn();
        play_ground[4].textContent = pt;
        data[5] = pt;
      }
      break;
    case 6:
      if (data[6] == "") {
        let pt = playerTurn();
        play_ground[5].textContent = pt;
        data[6] = pt;
      }
      break;
    case 7:
      if (data[7] == "") {
        let pt = playerTurn();
        play_ground[6].textContent = pt;
        data[7] = pt;
      }
      break;
    case 8:
      if (data[8] == "") {
        let pt = playerTurn();
        play_ground[7].textContent = pt;
        data[8] = pt;
      }
      break;
    case 9:
      if (data[9] == "") {
        let pt = playerTurn();
        play_ground[8].textContent = pt;
        data[9] = pt;
      }
      break;
  }
  winCodi();
};
const winCodi = () => {
  if (
    (data[1] == data[2] && data[2] == data[3] && data[2] == "X") || (data[4] == data[5] && data[5] == data[6] && data[5] == "X") || (data[7] == data[8] && data[8] == data[9] && data[8] == "X") || (data[1] == data[4] && data[4] == data[7] && data[4] == "X") || (data[2] == data[5] && data[5] == data[8] && data[5] == "X") || (data[3] == data[6] && data[6] == data[9] && data[6] == "X") || (data[1] == data[5] && data[5] == data[9] && data[5] == "X") || (data[3] == data[5] && data[5] == data[7] && data[5] == "X")
  ) {
    playAgainDisplayCss();
    document.getElementById("result").textContent = "X Win";
    scoreData.up("X");
    scoreData.show();
    data.rm();
  } else if (
    (data[1] == data[2] && data[2] == data[3] && data[2] == "O") || (data[4] == data[5] && data[5] == data[6] && data[5] == "O") || (data[7] == data[8] && data[8] == data[9] && data[8] == "O") || (data[1] == data[4] && data[4] == data[7] && data[4] == "O") || (data[2] == data[5] && data[5] == data[8] && data[5] == "O") || (data[3] == data[6] && data[6] == data[9] && data[6] == "O") || (data[1] == data[5] && data[5] == data[9] && data[5] == "O") || (data[3] == data[5] && data[5] == data[7] && data[5] == "O")
  ) {
    playAgainDisplayCss();
    document.getElementById("result").textContent = "O Win";
    scoreData.up("O");
    scoreData.show();
    data.rm();
  } else if (
    (data[1] != "" && data[2] != "" && data[3] != "" && data[4] != "" && data[5] != "" && data[6] != "" && data[7] != "" && data[8] != "" && data[9] != "" && data[5] != "null")
  ) {
    playAgainDisplayCss();
    document.getElementById("result").textContent = "Match Draw";
    data.rm();
  }
};
const playAgain = function () {
  for (let count = 0; count < 9;) {
    play_ground[count].innerHTML = '<span class="hidden">.</span>';
    count++;
    data[count] = "";
  }
  playAgainDisplayCss();
  document.getElementById("result").innerText = "-";
};
const reset = function () {
  for (let count = 0; count < 9;) {
    play_ground[count].innerHTML = '<span class="hidden">.</span>';
    count++;
    data[count] = "";
  }
  playAgainDisplayCss();
  document.getElementById("result").innerText = "-";
  scoreData.X = 0;
  scoreData.O = 0;
  scoreData.show();
};
let countB = 0;
function playAgainDisplayCss() {
  let btnSP = document.querySelector('button[onclick="playAgain()"]');
  switch (countB) {
    case 0:
      btnSP.style = "display: none;";
      countB++;
      break;
    case 1:
      btnSP.style = "";
      countB--;
      break;
  }
}
playAgainDisplayCss();
