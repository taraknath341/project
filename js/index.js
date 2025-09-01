"use strict";

let programList = [
  {
    title: "Calculetor",
    subTitle: "You can calculate simple interest using it.",
    url: "./cal.html",
    imgUrl: "./img/cal.png"
  },
  {
    title: "Temperature Converter",
    subTitle: "With this you can convert from Celsius to Fahrenheit.",
    url: "./c2f.html",
    imgUrl: "./img/c2f.png"
  },
  {
    title: "Simple Interest",
    subTitle: "You can calculate simple interest using it.",
    url: "./sudkosa.html",
    imgUrl: "./img/sudkosa.png"
  },
  {
    title: "Tic Tie Toe",
    subTitle: "You can play Tic-Tie-Toe Game.",
    url: "./tic-tie-toe.html",
    imgUrl: "./img/tic.png"
  },
  {
    title: "Stone Paper Sizer",
    subTitle: "You can play Stone Paper Sizer Game.",
    url: "./sps.html",
    imgUrl: "./img/sps.png"
  },
  {
    title: "Fire Ludo",
    subTitle: "A different kind of Ludo, a different kind of joy.",
    url: "./fireludo.html",
    imgUrl: "./img/fireludo.png"
  },
  {
    title: "Head Tail",
    subTitle: "You can use it for head-to-tail.",
    url: "./headtail.html",
    imgUrl: "./img/headtail.png"
  },
  {
    title: "QR Code Maker",
    subTitle: "Golden opportunity to create QR code.",
    url: "./qr-code.html",
    imgUrl: "./img/qr-code.jpg"
  },
  {
    title: "Tarak Search",
    subTitle: "India's Search Engine.",
    url: "https://taraksearch.netlify.app",
    imgUrl: "./img/logo.svg"
  },
  {
    title: "Tarak AI",
    subTitle: "India's Artificial Intelligence.",
    url: "./ai.html",
    imgUrl: "./img/logo.svg"
  },
]

let container = document.querySelector(".container");
function setBox({title, subTitle, url, imgUrl}) {
  console.log(title, subTitle, url, imgUrl)
  container.innerHTML += `
    <a href="${url}">
      <div class="program">
        <img src="${imgUrl}">
        <h3>${title}</h3>
        <p>${subTitle}</p>
      </div>
    </a>
  `;
}


programList.forEach(iv => {
  setBox(iv);
})


container = programList = setBox = null;
console.log(container, setBox);

