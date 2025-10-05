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

export function DivideByZero(num) {
  if (num === 0) {
    errorMessage(`Can't divide by 0`);
    return 1;
  } else return num;
};

export function ModuloFromZero(num) {
  if (num === 0) {
    errorMessage(`Can't modulo from 0`)
  };
};