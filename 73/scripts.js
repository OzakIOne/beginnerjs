function wait(ms = 0) {
  return new Promise((res) => setTimeout(res, ms));
}

function randBetween(min = 20, max = 150, randomNum = Math.random()) {
  return Math.floor(randomNum * (max - min) + min);
}

async function draw(el) {
  const text = el.textContent;
  let acc = '';
  for (const letter of text) {
    const { typeMin, typeMax } = el.dataset;
    acc += letter;
    el.textContent = acc;
    await wait(randBetween(typeMin, typeMax));
  }
}
// document.querySelectorAll('[data-type]').forEach(draw);
document.querySelectorAll('[data-type]').forEach(draw2);

function draw2(el) {
  let index = 0;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index++;
    await wait(randBetween(typeMin, typeMax));
    if (index <= text.length) drawLetter();
  }
  drawLetter();
}
