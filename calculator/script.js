// Style
const style1 = document.createElement("style");
document.head.appendChild(style1);
style1.innerHTML = `
    :root {
      --theme-color: hsl(${parseInt(Math.random() * 350)}, 95%, 42%);
    }
  `;
setInterval(() => {
  style1.innerHTML = `
    :root {
      --theme-color: hsl(${parseInt(Math.random() * 350)}, 95%, 42%);
    }
  `;
}, 5000);

// Append values to the display
function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

// Clear the display
function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}

// Delete the last character
function deleteChar() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Input Error';
  }
}
