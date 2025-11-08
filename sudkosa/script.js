
"use strict";
btn();
function choice() {
  let x = document.getElementsByTagName("select")[0].value;
  return x;
}
function rm() {
  document.getElementsByTagName("input")[0].value = "";
  document.getElementsByTagName("input")[1].value = "";
  document.getElementsByTagName("input")[2].value = "";
}
function safe(num) {
  if (num == null || num == "" || num == NaN) return "down";
}
function btn() {
  let returN = choice();
  switch (returN) {
    case "i":
      document.getElementsByClassName("inp")[0].innerHTML = "আসল (p)";
      document.getElementsByClassName("inp")[1].innerHTML = "শতকরা সুদের হার (r)";
      document.getElementsByClassName("inp")[2].innerHTML = "সময় / বছর (t)";
      document.querySelectorAll("input")[0].type = "number";
      document.querySelectorAll("input")[1].type = "number";
      document.querySelectorAll("input")[2].type = "text";
      break;
    case "p":
      document.getElementsByClassName("inp")[0].innerHTML = "সুদ (i)";
      document.getElementsByClassName("inp")[1].innerHTML = "শতকরা সুদের হার (r)";
      document.getElementsByClassName("inp")[2].innerHTML = "সময় / বছর (t)";
      document.querySelectorAll("input")[0].type = "number";
      document.querySelectorAll("input")[1].type = "number";
      document.querySelectorAll("input")[2].type = "text";
      break;
    case "r":
      document.getElementsByClassName("inp")[0].innerHTML = "সুদ (i)";
      document.getElementsByClassName("inp")[1].innerHTML = "আসল (p)";
      document.getElementsByClassName("inp")[2].innerHTML = "সময় / বছর (t)";
      document.querySelectorAll("input")[0].type = "number";
      document.querySelectorAll("input")[1].type = "number";
      document.querySelectorAll("input")[2].type = "text";
      break;
    case "t":
      document.getElementsByClassName("inp")[0].innerHTML = "সুদ (i)";
      document.getElementsByClassName("inp")[1].innerHTML = "আসল (p)";
      document.getElementsByClassName("inp")[2].innerHTML = "শতকরা সুদের হার (r)";
      document.querySelectorAll("input")[0].type = "number";
      document.querySelectorAll("input")[1].type = "number";
      document.querySelectorAll("input")[2].type = "number";
  }
}
function output() {
  let returN = choice();
  switch (returN) {
    case "i": {
      let p = eval(document.getElementsByTagName("input")[0].value);
      let r = eval(document.getElementsByTagName("input")[1].value);
      let t = eval(document.getElementsByTagName("input")[2].value);
      if ((safe(p) == "down") || (safe(r) == "down") || (safe(t) == "down")) {
        document.getElementsByTagName("h5")[0].innerHTML = "Error: ঠিকভাবে ইনপুট করুন";
      } else {
        let i = (p * r * t / 100);
        document.getElementsByTagName("h5")[0].innerHTML = "উত্তর: সুদ (i) = " + i;
      }
    }
      break;
    case "p": {
      let i = eval(document.getElementsByTagName("input")[0].value);
      let r = eval(document.getElementsByTagName("input")[1].value);
      let t = eval(document.getElementsByTagName("input")[2].value);
      if ((safe(i) == "down") || (safe(r) == "down") || (safe(t) == "down")) {
        document.getElementsByTagName("h5")[0].innerHTML = "Error: ঠিকভাবে ইনপুট করুন";
      } else {
        let p = ((i * 100) / (r * t));
        document.getElementsByTagName("h5")[0].innerHTML = "উত্তর: আসল (p) = " + p;
      }
    }
      break;
    case "r": {
      let i = eval(document.getElementsByTagName("input")[0].value);
      let p = eval(document.getElementsByTagName("input")[1].value);
      let t = eval(document.getElementsByTagName("input")[2].value);
      if ((safe(i) == "down") || (safe(p) == "down") || (safe(t) == "down")) {
        document.getElementsByTagName("h5")[0].innerHTML = "Error: ঠিকভাবে ইনপুট করুন";
      } else {
        let r = ((i * 100) / (p * t));
        document.getElementsByTagName("h5")[0].innerHTML = "উত্তর: সুদের হার (r) = " + r;
      }
    }
      break;
    case "t": {
      let i = eval(document.getElementsByTagName("input")[0].value);
      let p = eval(document.getElementsByTagName("input")[1].value);
      let r = eval(document.getElementsByTagName("input")[2].value);
      if ((safe(i) == "down") || (safe(p) == "down") || (safe(r) == "down")) {
        document.getElementsByTagName("h5")[0].innerHTML = "Error: ঠিকভাবে ইনপুট করুন";
      } else {
        let t = ((i * 100) / (r * p));
        document.getElementsByTagName("h5")[0].innerHTML = "উত্তর: সময় / বছর (t) = " + t;
      }
    }
  }
}
