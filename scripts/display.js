export function updateDisplay(value) {
    const display = document.querySelector('.display');

    if (display.innerHTML === '0') {
        display.innerHTML = value;
        return;
    };

    display.innerHTML += value;
};

export function clearDisplay() {
    const display = document.querySelector('.display');
    display.innerHTML = '0';
};

export function clearLastNumberDisplay() {
    const displayLastNumber = document.querySelector('.last-number');
    displayLastNumber.innerHTML = '0';
};

export function clearOperatorDisplay() {
    const displayOperator = document.querySelector('.current-operation');
    displayOperator.innerHTML = 'null';
}

export function updateLastNumber(lastNumber) {
    const displayLastNumber = document.querySelector('.last-number');
    displayLastNumber.innerHTML = lastNumber;
};

export function updateOperatorDisplay(operator) {
    const displayOperator = document.querySelector('.current-operation');
    displayOperator.innerHTML = operator;
};
