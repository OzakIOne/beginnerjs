function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  popup.remove();
  popup = null;
}

function ask(options) {
  return new Promise(async function (res) {
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input" />
        <button type="submit">Submit</button>
      </fieldset>
      `,
    );
    if (options.cancel) {
      const skipBtn = document.createElement('button');
      skipBtn.type = 'button';
      skipBtn.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipBtn);
      skipBtn.addEventListener(
        'click',
        function () {
          res(null);
          destroyPopup(popup);
        },
        { once: true },
      );
    }
    popup.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        res(e.target.input.value);
        destroyPopup(popup);
      },
      { once: true },
    );
    document.body.appendChild(popup);
    await wait(50);
    popup.classList.add('open');
  });
}

async function askQuestions(e) {
  const button = e.currentTarget;
  // const cancel = "cancel" in buttons.dataset
  const cancel = button.hasAttribute('data-cancel');
  // const cancel = buttons.dataset.cancel ? true : false
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => {
  button.addEventListener('click', askQuestions);
});

const questions = [
  { title: 'name?' },
  { title: 'age?', cancel: true },
  { title: 'dog?' },
];

async function askMany() {
  for (question of questions) {
    const answer = await ask(question);
    console.log('answer:', answer);
  }
}

async function asyncMap(array, cb) {
  const results = [];
  for (const item of array) {
    const res = await cb(item);
    results.push(res);
  }
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log('answers:', answers);
}
go();
// askMany();
