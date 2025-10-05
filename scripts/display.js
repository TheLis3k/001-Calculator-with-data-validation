import { getFromLocalMemory, saveToLocalMemory, clearLocalMemory } from "./utils/localMemory.js";
import * as validation from "./utils/validation.js"
import { setEventListeners } from "./eventListeners.js"; 

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

    if (validation.validateCalculatorInput(display.innerHTML + value)) {
        return;
    };

    if (display.innerHTML === '0') {
        display.innerHTML = value;
        saveToLocalMemory('currentNumber', display.innerHTML);
        return;
    };

    display.innerHTML += value;
    saveToLocalMemory('currentNumber', display.innerHTML);
};

export function updateLastNumber() {
    const displayLastNumber = document.querySelector('.last-number');
    displayLastNumber.innerHTML = getFromLocalMemory('lastNumber') || '0';
};

export function updateOperatorDisplay() {
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

let expandCount = 0;

export function nonExpandedCalculator() {
    const buttons = document.querySelector('.buttons');
    const expandButton = document.querySelector('.expand-btn');

    expandButton.innerHTML = 'Expand';

    buttons.classList.add('buttons-hidden')

    expandButton.classList.remove('expanded')

    buttons.innerHTML = `
        <button class="calc-btn calc-btn-hidden calc-btn-num">7</button>
        <button class="calc-btn calc-btn-hidden calc-btn-num">8</button>
        <button class="calc-btn calc-btn-hidden calc-btn-num">9</button>
        <button class="calc-btn calc-btn-hidden calc-btn-op calc-btn-2">/</button>
        <button class="calc-btn calc-btn-hidden calc-btn-num">4</button>
        <button class="calc-btn calc-btn-hidden calc-btn-num">5</button>
        <button class="calc-btn calc-btn-hidden calc-btn-num">6</button>
        <button class="calc-btn calc-btn-hidden calc-btn-op calc-btn-2">*</button>
        <button class="calc-btn calc-btn-hidden calc-btn-num">1</button>
        <button class="calc-btn calc-btn-hidden calc-btn-num">2</button>
        <button class="calc-btn calc-btn-hidden calc-btn-num">3</button>
        <button class="calc-btn calc-btn-hidden calc-btn-op calc-btn-2">-</button>
        <button class="calc-btn calc-btn-hidden calc-btn-num">.</button>
        <button class="calc-btn calc-btn-hidden calc-btn-num">0</button>
        <button class="calc-btn calc-btn-hidden calc-btn-eq calc-btn-3">=</button>
        <button class="calc-btn calc-btn-hidden calc-btn-op calc-btn-2">+</button>
        <button class="calc-btn calc-btn-hidden calc-btn-c calc-btn-3">c</button>
        <button class="calc-btn calc-btn-hidden calc-btn-backspace calc-btn-3">&#9003;</button>
        <button class="calc-btn calc-btn-hidden calc-btn-single-op calc-btn-2">!</button>
        <button class="calc-btn calc-btn-hidden calc-btn-op calc-btn-2">%</button>
        <button class="calc-btn calc-btn-hidden calc-btn-mem">mrc</button>
        <button class="calc-btn calc-btn-hidden calc-btn-mem">mr</button>
        <button class="calc-btn calc-btn-hidden calc-btn-mem">mr+</button>
        <button class="calc-btn calc-btn-hidden calc-btn-mem">mr-</button>
    `;

    expandCount++;
    if(expandCount >= 10){
        location.reload();
    };

    setEventListeners();
};

export function expandedCalculator() {
    const buttons = document.querySelector('.buttons');
    const expandButton = document.querySelector('.expand-btn');

    expandButton.innerHTML = 'Minimize'

    buttons.classList.remove('buttons-hidden')
    expandButton.classList.add('expanded')

    buttons.innerHTML = `
        <button class="calc-btn calc-btn-num">7</button>
        <button class="calc-btn calc-btn-num">8</button>
        <button class="calc-btn calc-btn-num">9</button>
        <button class="calc-btn calc-btn-op calc-btn-2">/</button>
        <button class="calc-btn calc-btn-single-op">x^2</button>
        <button class="calc-btn calc-btn-num">4</button>
        <button class="calc-btn calc-btn-num">5</button>
        <button class="calc-btn calc-btn-num">6</button>
        <button class="calc-btn calc-btn-op calc-btn-2">*</button>
        <button class="calc-btn calc-btn-single-op">x^3</button>
        <button class="calc-btn calc-btn-num">1</button>
        <button class="calc-btn calc-btn-num">2</button>
        <button class="calc-btn calc-btn-num">3</button>
        <button class="calc-btn calc-btn-op calc-btn-2">-</button>
        <button class="calc-btn calc-btn-op">x^y</button>
        <button class="calc-btn calc-btn-num">.</button>
        <button class="calc-btn calc-btn-num">0</button>
        <button class="calc-btn calc-btn-eq calc-btn-3">=</button>
        <button class="calc-btn calc-btn-op calc-btn-2">+</button>
        <button class="calc-btn calc-btn-single-op">√x</button>
        <button class="calc-btn calc-btn-c calc-btn-3">c</button>
        <button class="calc-btn calc-btn-backspace calc-btn-3">&#9003;</button>
        <button class="calc-btn calc-btn-single-op calc-btn-2">!</button>
        <button class="calc-btn calc-btn-op calc-btn-2">%</button>
        <button class="calc-btn calc-btn-op">y√x</button>
        <button class="calc-btn calc-btn-mem">mrc</button>
        <button class="calc-btn calc-btn-mem">mr</button>
        <button class="calc-btn calc-btn-mem">mr+</button>
        <button class="calc-btn calc-btn-mem">mr-</button>
        <button class="calc-btn calc-btn-single-op">1/x</button>
        <button class="calc-btn calc-btn-single-op">sin x</button>
        <button class="calc-btn calc-btn-single-op">cos x</button>
        <button class="calc-btn calc-btn-single-op">tan x</button>
        <button class="calc-btn calc-btn-single-op">log x</button>
        <button class="calc-btn calc-btn-single-op">x^-1</button>
    `;

    expandCount++;
    if(expandCount >= 10){
        location.reload();
    };

    setEventListeners();
};