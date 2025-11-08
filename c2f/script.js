"use strict";
function convertTemperature() {
  const unitSelect = document.getElementById("unit-select");
  const inputField = document.getElementById("input");
  const resultField = document.getElementById("result");
  const inputValue = inputField.value;
  if (isNaN(inputValue) || inputValue === "") {
    resultField.textContent = "Please enter a valid temperature.";
    return;
  }
  if (unitSelect.value === "celsius-to-fahrenheit") {
    // Convert Celsius to Fahrenheit
    const fahrenheit = (inputValue * 9 / 5) + 32;
    resultField.textContent = `${inputValue}°C = ${fahrenheit.toFixed(2)}°F`;
  } else if (unitSelect.value === "fahrenheit-to-celsius") {
    // Convert Fahrenheit to Celsius
    const celsius = (inputValue - 32) * 5 / 9;
    resultField.textContent = `${inputValue}°F = ${celsius.toFixed(2)}°C`;
  }
}
console.log("Made With Taraknath Karan");

