"use strict";

// Style
const styleTag = document.createElement("style");
document.head.appendChild(styleTag);

function randomColorGen() {
  return parseInt(Math.random() * 349);
}

setInterval(() => {
  styleTag.innerHTML = `
    header, div, footer, form {
      box-shadow: 0 0 7pc hsl(${randomColorGen()}, 100%, 50%);
    }
  `;
}, 3000);

// btn Click
function createQrCode() {
  const url = document.querySelector("input[type=url]").value;
  const darkColor = document.getElementById("dark").value.slice(1);
  const lightColor = document.getElementById("light").value.slice(1);
  const errorLevel = document.getElementById("ecLevel").value;
  const format = document.getElementById("format").value;

  const qrUrl = `https://quickchart.io/qr?text=${url}&dark=${darkColor}&light=${lightColor}&margin=3&size=800&ecLevel=${errorLevel}&format=${format}`;
  console.log(qrUrl);
  document.getElementById("qr").src = qrUrl;
  return false;
}

function downloadBtn() {
  const qrCodeUrl = document.getElementById("qr").src;

  fetch(qrCodeUrl)
    .then(res => res.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "qr_code";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    })
    .catch(err => {
      alert("Download Error");
      console.log(err);
    });
}

