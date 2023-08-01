let currentInput = "0";
let operator = "";
let previousInput = "0";
let shouldResetDisplay = false;

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = currentInput;
}

function appendNumber(num) {
  if (currentInput === "0" || shouldResetDisplay) {
    currentInput = num.toString();
    shouldResetDisplay = false;
  } else {
    currentInput += num.toString();
  }
  updateDisplay();
}

function handleDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function handleOperator(op) {
  shouldResetDisplay = true;
  operator = op;
  previousInput = currentInput;
}

function clearDisplay() {
  currentInput = "0";
  operator = "";
  previousInput = "0";
  shouldResetDisplay = false;
  updateDisplay();
}

function calculate() {
  let result;
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = "";
  previousInput = "0";
  shouldResetDisplay = true;
  updateDisplay();
}

updateDisplay();

