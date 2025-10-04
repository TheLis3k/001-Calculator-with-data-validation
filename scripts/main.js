import { updateDisplay, clearDisplay, clearLastNumberDisplay, clearOperatorDisplay, loadEntireDisplay } from "./display.js";
import { useOperator, calculateOperator, calculateSingleOperator } from "./calculator.js";
import { memoryFunction } from "./memory.js";

loadEntireDisplay();

const buttons = document.querySelectorAll('.calc-btn-num');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    updateDisplay(value);
  });
});

const clearButton = document.querySelector('.calc-btn-c');
clearButton.addEventListener('click', () => {
    clearDisplay();
    clearLastNumberDisplay();
    clearOperatorDisplay();
});

const operatorButtons = document.querySelectorAll('.calc-btn-op');
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
      const operator = button.textContent;
      useOperator(operator);
  });
});

const equalButton = document.querySelector(`.calc-btn-eq`);
equalButton.addEventListener('click', () => {
  calculateOperator();
});

const  singleOperatorButton = document.querySelectorAll('.calc-btn-single-op');
singleOperatorButton.forEach(button => {
button.addEventListener('click', () => {
  const operator = button.textContent;
  calculateSingleOperator(operator);
});
});

const memoryButtons = document.querySelectorAll('.calc-btn-mem');
memoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.textContent;
    memoryFunction(action);
  });
});