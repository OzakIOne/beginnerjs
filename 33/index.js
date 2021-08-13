const canvas = document.querySelector('#sketch');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake');

const { width, height } = canvas;
const MOVE_AMOUNT = 10;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '10';
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

const draw = (opts) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (opts.key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
};

const clearCanvas = () => {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener('animationend', () => {
    canvas.classList.remove('shake');
  });
};

const handleKey = (e) => {
  if (e.key.includes('Arrow')) draw({ key: e.key });
  if (e.key === ' ' || e.key === 'Backspace') clearCanvas();
};

window.addEventListener('keydown', (e) => handleKey(e));
shakeBtn.addEventListener('click', () => clearCanvas());
