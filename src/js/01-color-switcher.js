function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
btnStop.disabled = true;
let changes = null;
let colors = null;

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.removeAttribute('disabled');
  colors = body.style.background;
  changes = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  btnStop.disabled = true;
  btnStart.removeAttribute('disabled');
  clearInterval(changes);
});
