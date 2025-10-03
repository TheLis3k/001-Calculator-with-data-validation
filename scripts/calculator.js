import { clearDisplay, updateLastNumber, updateOperatorDisplay } from "./display.js"; 
import { factorial } from "./utils/math.js";

  let lastNumber = null;
  let currentOperator = null;

export function useOperator(operator) {
  lastNumber = parseFloat(document.querySelector('.display').innerHTML);
  currentOperator = operator;

  updateLastNumber(lastNumber);
  updateOperatorDisplay(operator);
  clearDisplay();
};

export function calculateOperator() {
  const currentNumber = parseFloat(document.querySelector('.display').innerHTML);
  let result = 0;

  switch (currentOperator) {
    case '+':
      result = lastNumber + currentNumber;
      break;
    case '-':
      result = lastNumber - currentNumber;
      break;
    case '*':
      result = lastNumber * currentNumber;
      break;
    case '/':
      result = lastNumber / currentNumber;
      break;
    case '%':
      result = lastNumber % currentNumber;
      break;
    case 'x^y':
      result = lastNumber ** currentNumber;
      break;
    default:
      result = currentNumber;
      break;
  }

  document.querySelector('.display').innerHTML = result;
  lastNumber = result;
  currentOperator = null;

  updateLastNumber(lastNumber);
  updateOperatorDisplay('null');
};

export function calculateSingleOperator(operator) {
  const currentNumber = parseFloat(document.querySelector('.display').innerHTML);
  let result = 0;

  switch (operator) {
    case 'x^2':
      result = currentNumber ** 2;
      break;
    case 'x^3':
      result = currentNumber ** 3;
      break;
    case '√x':
      result = Math.sqrt(currentNumber);
      break;
    case '!':
      result = factorial(currentNumber);
      break;
    case 'log x':
      result = Math.log10(currentNumber);
      break;
    case '1/x':
      result = 1 / currentNumber;
      break;
    case 'sin x':
      result = Math.sin(currentNumber);
      break;
    case 'cos x':
      result = Math.cos(currentNumber);
      break;
    case 'tan x':
      result = Math.tan(currentNumber);
      break;
    case 'ln x':
      result = Math.log(currentNumber);
      break;
    case 'x^-1':
      result = currentNumber ** -1;
      break;
    };

  document.querySelector('.display').innerHTML = result;
  lastNumber = result;
  currentOperator = null;

  updateLastNumber(lastNumber);
  updateOperatorDisplay('null');
};