import { clearDisplay } from "./display.js";
import { getFromLocalMemory, saveToLocalMemory, clearLocalMemory } from "./utils/localMemory.js";

export function memoryFunction(action) {
  const memory = document.querySelector('.memory-value');
  let memoryValue = getFromLocalMemory('memoryValue') || 0;

  const display = document.querySelector('.display');
  let currentValue = getFromLocalMemory('currentNumber') || 0;

  switch (action) {
    case 'mr+':
      memoryValue += currentValue;
      saveToLocalMemory('memoryValue', memoryValue);
      clearDisplay();
      break;
    case 'mr-':
      memoryValue -= currentValue;
      saveToLocalMemory('memoryValue', memoryValue);
      clearDisplay();
      break;
    case 'mr':
      display.innerHTML = memoryValue;
      saveToLocalMemory('currentNumber', memoryValue);
      break;
    case 'mrc':
      clearLocalMemory('memoryValue');
      memoryValue = 0;
      break;
  }

  memory.innerHTML = memoryValue;
};