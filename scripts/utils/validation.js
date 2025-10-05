const errorMessageContainer = document.querySelector('.error-messages');
const errorMessageText = document.querySelector('.error-message-text');

let errorsCount = 0;
let timer;

function errorMessage(message) {
  errorsCount++;
  errorMessageText.innerHTML = `${message}`;
  errorMessageContainer.classList.add('error-messages-show');
  clearTimeout(timer);
  timer = setTimeout(() => {
    errorMessageContainer.classList.remove('error-messages-show');
  }, 3000);
  if (!(errorsCount % 10)) {
    setTimeout(() => {errorMessage('Daym, you are bad with math!')}, 4000);
  };
  if (errorsCount === 27) {
    window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1', '_blank');
  };
};

export function divideByZero(num) {
  if (num === 0) {
    errorMessage(`Can't divide by 0`);
    return true;
  } else return false;
};

export function moduloFromZero(num) {
  if (num === 0) {
    errorMessage(`Can't modulo from 0`);
    return true;
  } else return false;
};

export function rootOfMinusNumber(num,root) {
  if (root === 0){
    errorMessage(`Can't do 0 root`);
    return true;
  } else if (num < 0 && !(root % 2)) {
    errorMessage(`Can't even root of negative number`);
    return true;
  } else return false;
};

export function factorialOfNegative(num) {
  if (num < 0) {
    errorMessage(`Can't do factorial of negative number`);
    return true;
  } else if (num % 1) {
    errorMessage(`Can't do factorial of decimal numbers`);
    return true;
  } else return false;
};

export function logarytmOfZero (num) {
  if (num === 0) {
    errorMessage(`Can't do logarythm of 0`);
    return true;
  } else if (num < 0) {
    errorMessage(`Can't do logarythm of negative num`);
    return true;
  } else return false;
};

export function powOfZero (num, pow) {
  if (num === 0 && pow === 0) {
    errorMessage(`Can't do 0 to the power of 0`);
    return true;
  } else if (num < 0 && pow % 1) {
    errorMessage(`Can't do negative number to fractional power`);
    return true;
  } else if (pow < 0) {
    errorMessage(`Can't do power of negative num`);
    return true;
  } return false;
};

export function maxMinValue (num) {
  if (num === Infinity) {
    errorMessage('Number exceed maximum number limit');
    return true;
  } else if (num === -Infinity) {
    errorMessage('Number exceed minimum number limit');
    return true;
  } else return false;
};

export function validateCalculatorPaste(num) {
  const trimmed = num.trim();

  if(!trimmed) {
    errorMessage(`Input can't be empty`);
    return 0;
  };

  const validNumberPattern = /^[-+]?[0-9]*\.?[0-9]+$/;

  if (validNumberPattern.test(trimmed)){
    return trimmed;
  };

  errorMessage('Invalid paste, only numbers/one . allowed');
  return 0;
};

export function validateCalculatorInput(num) {

  const validNumberPattern = /^[-+]?([0-9]+\.?[0-9]*|\.[0-9]+)$/;

  if (validNumberPattern.test(num)){
    return false;
  };

  errorMessage('Invalid input only one . allowed');
  return true;
};