export function memoryFunction(action) {
  const memory = document.querySelector('.memory-value');
  let memoryValue = parseFloat(memory.innerHTML) || 0;

  const display = document.querySelector('.display');
  let currentValue = parseFloat(display.innerHTML) || 0;

  switch (action) {
    case 'mr+':
      memoryValue += currentValue;
      break;
    case 'mr-':
      memoryValue -= currentValue;
      break;
    case 'mr':
      display.innerHTML = memoryValue;
      break;
    case 'mrc':
      memoryValue = 0;
      break;
  }

  memory.innerHTML = memoryValue;
};