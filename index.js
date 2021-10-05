const buttonElementStart = document.querySelector('[data-action="start"]');
const buttonElementEnd = document.querySelector('[data-action="stop"]');
const bodyElement = document.querySelector('body');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

buttonElementStart.addEventListener('click', onClickStart);
buttonElementEnd.addEventListener('click', onClickStop);

let intervalId = null;
let isActive = false;

function onClickStart() {
  if (isActive) {
    return;
  }

  isActive = true;
  intervalId = setInterval(() => {
    const currentColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
    bodyElement.style.backgroundColor = currentColor;
  }, 1000);
}
function onClickStop() {
  clearInterval(intervalId);
  isActive = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
