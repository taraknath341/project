
"use strict";
const score = {
  you: 0,
  com: 0,
}
const game_body = document.querySelector("#game-body");
const exit = function () {
  game_body.innerHTML = `
    <br><br>
    <h2 class="companyName">Tarak Program</h2>
    <h1 class="gameName">Stone Paper Sizer</h1>
    <br><br>
    <button class="play" onClick="playBtn()">Play</button>
    <br><br>
    <pre>Coder Name: Taraknath Karan.</pre>
  `;
  score.com = 0;
  score.you = 0;
}
exit();
const computerMode = () => {
  let a = Math.round(Math.random() * 100);
  console.log(a);
  if (a < 33) {
    return "Stone";
  } else if (a < 66) {
    return "Paper";
  } else {
    return "Sizer";
  }
};
const playBtn = () => {
  game_body.innerHTML = `
    <p class="score">You: ${score.you} || Com: ${score.com}</p>
    <p>Choice Your:</p>
    <button class="choice" onClick="playMode('Stone')">Stone</button>
    <span class="hidden">..</span>
    <button class="choice" onClick="playMode('Paper')">Paper</button>
    <span class="hidden">..</span>
    <button class="choice" onClick="playMode('Sizer')">Sizer</button>
    <br><br><br>
    <br><br><br>
    <button onClick="exit()" class="aabb">Exit</button>
  `;
}
const gameResult = (userPower, computerPower) => {
  if (userPower == computerPower) {
    return "Game Due";
  } else if ((userPower == "Stone" && computerPower == "Sizer") || (userPower == "Paper" && computerPower == "Stone") || (userPower == "Sizer" && computerPower == "Paper")) {
    return "You Win";
  } else {
    return "You Lose";
  }
}
const scoreUpCom = (par) => {
  if (par == "You Lose") {
    let re = ++score.com;
    return re;
  } else {
    return score.com;
  }
}
const scoreUpYou = (par) => {
  if (par == "You Win") {
    let re = ++score.you;
    return re;
  } else {
    return score.you;
  }
}
const playMode = (userPower) => {
  let b = computerMode();
  let total = gameResult(userPower, b);
  game_body.innerHTML = `
    <p class="score">You: ${scoreUpYou(total)} || Com: ${scoreUpCom(total)}</p>
    <button class="aaaa">
      <font size="4">You</font>
      <br><br><br><br>
      <font size="6">${userPower}</font>
    </button>
    <span class="hidden">. . .</span>
    <button class="aaaa">
      <font size="4">Com</font>
      <br><br><br><br>
      <font size="6">${b}</font>
    </button>
    <br><br><br><br>
    <font size="7">${total}</font>
    <br><br><br>
    <button onClick="exit()" class="aabb">Exit</button>
    <button onClick="playBtn()" class="aabb">Play Again</button>
  `;
}
let zoomValue = 100;
function zoomBtn(z) {
  zoomValue += z;
  game_body.style.zoom = `${zoomValue}%`;
}
zoomBtn(10);
