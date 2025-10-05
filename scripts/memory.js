import { clearDisplay } from "./display.js";
import { getFromLocalMemory, saveToLocalMemory, clearLocalMemory } from "./utils/localMemory.js";

export function memoryFunction(action) {
  const memory = document.querySelector('.memory-value');
  let memoryValue = getFromLocalMemory('memoryValue') || 0;

  const display = document.querySelector('.display');
  let currentValue = getFromLocalMemory('currentNumber') || 0;

  memoryValue = Number(memoryValue);
  currentValue = Number(currentValue);

  switch (action) {
    case 'mr+':
      if (memoryValue === 0){
        memoryValue = currentValue;
      } else memoryValue += currentValue;
      saveToLocalMemory('memoryValue', memoryValue);
      clearDisplay();
      break;
    case 'mr-':
      if (memoryValue === 0){
        memoryValue = currentValue;
      } else memoryValue -= currentValue;
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