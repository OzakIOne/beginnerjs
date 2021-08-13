import { colorsByLength, isDark } from './colors';
import { handleResult } from './handlers';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
  return colors
    .map((color) => {
      return `<span class="color ${color} ${
        isDark(color) ? 'dark' : ''
      }" style="background: ${color};">${color}</span>`;
    })
    .join('');
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  if (!('SpeechRecognition' in window)) {
    console.log('Sorry no support for this browser');
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);
