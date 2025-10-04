import { getFromLocalMemory, saveToLocalMemory, clearLocalMemory } from "./utils/localMemory.js";

export function loadEntireDisplay() {
    const display = document.querySelector('.display');
    const displayLastNumber = document.querySelector('.last-number');
    const displayOperator = document.querySelector('.current-operation');
    const memory = document.querySelector('.memory-value');

    display.innerHTML = getFromLocalMemory('currentNumber') || '0';
    displayLastNumber.innerHTML = getFromLocalMemory('lastNumber') || '0';
    displayOperator.innerHTML = getFromLocalMemory('currentOperator') || 'null';
    memory.innerHTML = getFromLocalMemory('memoryValue') || '0';
};

export function updateDisplay(value) {
    const display = document.querySelector('.display');

    if (display.innerHTML === '0') {
        display.innerHTML = value;
        saveToLocalMemory('currentNumber', display.innerHTML);
        return;
    };

    display.innerHTML += value;
    saveToLocalMemory('currentNumber', display.innerHTML);
};

export function updateLastNumber(lastNumber) {
    const displayLastNumber = document.querySelector('.last-number');
    displayLastNumber.innerHTML = getFromLocalMemory('lastNumber') || '0';
};

export function updateOperatorDisplay(operator) {
    const displayOperator = document.querySelector('.current-operation');
    displayOperator.innerHTML = getFromLocalMemory('currentOperator') || 'null';
};

export function clearDisplay() {
    const display = document.querySelector('.display');
    display.innerHTML = '0';
    clearLocalMemory('currentNumber');
};

export function clearLastNumberDisplay() {
    const displayLastNumber = document.querySelector('.last-number');
    displayLastNumber.innerHTML = '0';
    clearLocalMemory('lastNumber');
};

export function clearOperatorDisplay() {
    const displayOperator = document.querySelector('.current-operation');
    displayOperator.innerHTML = 'null';
    clearLocalMemory('currentOperator');
};
