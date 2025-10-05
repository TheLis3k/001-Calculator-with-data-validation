import { clearDisplay, updateLastNumber, updateOperatorDisplay } from "./display.js"; 
import { factorial } from "./utils/math.js";
import { getFromLocalMemory, saveToLocalMemory } from "./utils/localMemory.js";
import * as validation from "./utils/validation.js";

export function useOperator(operator) {
  calculateOperator();

  saveToLocalMemory('lastNumber', parseFloat(document.querySelector('.display').innerHTML));
  saveToLocalMemory('currentOperator', operator);

  updateLastNumber(getFromLocalMemory('lastNumber'));
  updateOperatorDisplay(getFromLocalMemory('currentOperator'));
  clearDisplay();
};

export function calculateOperator() {
  saveToLocalMemory('currentNumber', parseFloat(document.querySelector('.display').innerHTML));
  let result = 0;

  if(getFromLocalMemory('currentOperator') === null) return;

  const currentNumber = getFromLocalMemory('currentNumber');
  const lastNumber = getFromLocalMemory('lastNumber');

  switch (getFromLocalMemory('currentOperator')) {
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
      result = lastNumber / validation.DivideByZero(currentNumber);
      break;
    case '%':
      result = lastNumber % validation.ModuloFromZero(currentNumber);
      break;
    case 'x^y':
      result = lastNumber ** currentNumber;
      break;
    case 'y√x':
      result = lastNumber ** (1 / currentNumber);
      break;
    default:
      result = currentNumber;
      break;
  }

  document.querySelector('.display').innerHTML = result;
  saveToLocalMemory('lastNumber', result);
  saveToLocalMemory('currentOperator', null);
  saveToLocalMemory('currentNumber', result);

  updateLastNumber(lastNumber);
  updateOperatorDisplay('null');
};

export function calculateSingleOperator(operator) {
  calculateOperator();

  saveToLocalMemory('currentNumber', parseFloat(document.querySelector('.display').innerHTML));
  let result = 0;

  switch (operator) {
    case 'x^2':
      result = getFromLocalMemory('currentNumber') ** 2;
      break;
    case 'x^3':
      result = getFromLocalMemory('currentNumber') ** 3;
      break;
    case '√x':
      result = Math.sqrt(getFromLocalMemory('currentNumber'));
      break;
    case '!':
      result = factorial(getFromLocalMemory('currentNumber'));
      break;
    case 'log x':
      result = Math.log10(getFromLocalMemory('currentNumber'));
      break;
    case '1/x':
      result = 1 / getFromLocalMemory('currentNumber');
      break;
    case 'sin x':
      result = Math.sin(getFromLocalMemory('currentNumber'));
      break;
    case 'cos x':
      result = Math.cos(getFromLocalMemory('currentNumber'));
      break;
    case 'tan x':
      result = Math.tan(getFromLocalMemory('currentNumber'));
      break;
    case 'ln x':
      result = Math.log(getFromLocalMemory('currentNumber'));
      break;
    case 'x^-1':
      result = getFromLocalMemory('currentNumber') ** -1;
      break;
    default:
      result = getFromLocalMemory('currentNumber');
      break;
    };

  document.querySelector('.display').innerHTML = result;
  saveToLocalMemory('lastNumber', result);
  saveToLocalMemory('currentOperator', null);
  saveToLocalMemory('currentNumber', result);

  updateLastNumber(getFromLocalMemory('lastNumber'));
  updateOperatorDisplay('null');
};

export function backspace() {
  const display = document.querySelector('.display');
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = '0';
  };
  saveToLocalMemory('currentNumber', parseFloat(display.textContent));
};