import { clearDisplay, updateLastNumber, updateOperatorDisplay } from "./display.js"; 
import { factorial } from "./utils/math.js";
import { getFromLocalMemory, saveToLocalMemory } from "./utils/localMemory.js";

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

  switch (getFromLocalMemory('currentOperator')) {
    case '+':
      result = getFromLocalMemory('lastNumber') + getFromLocalMemory('currentNumber');
      break;
    case '-':
      result = getFromLocalMemory('lastNumber') - getFromLocalMemory('currentNumber');
      break;
    case '*':
      result = getFromLocalMemory('lastNumber') * getFromLocalMemory('currentNumber');
      break;
    case '/':
      result = getFromLocalMemory('lastNumber') / getFromLocalMemory('currentNumber');
      break;
    case '%':
      result = getFromLocalMemory('lastNumber') % getFromLocalMemory('currentNumber');
      break;
    case 'x^y':
      result = getFromLocalMemory('lastNumber') ** getFromLocalMemory('currentNumber');
      break;
    default:
      result = getFromLocalMemory('currentNumber');
      break;
  }

  document.querySelector('.display').innerHTML = result;
  saveToLocalMemory('lastNumber', result);
  saveToLocalMemory('currentOperator', null);

  updateLastNumber(getFromLocalMemory('lastNumber'));
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
    };

  document.querySelector('.display').innerHTML = result;
  saveToLocalMemory('lastNumber', result);
  saveToLocalMemory('currentOperator', null);

  updateLastNumber(getFromLocalMemory('lastNumber'));
  updateOperatorDisplay('null');
};