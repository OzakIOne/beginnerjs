const jokeButton = document.querySelector('.getJoke');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');
const URL = 'https://icanhazdadjoke.com';

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
  loader.classList.remove('hidden');
  jokeButton.classList.add('hidden');
  const response = await fetch(URL, {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = response.json();
  console.log('data:', data);
  loader.classList.add('hidden');
  jokeButton.classList.remove('hidden');
  return data;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  const btnTxt = randomItemFromArr(buttonText, jokeButtonSpan.textContent);
  jokeButtonSpan.textContent = btnTxt;
  jokeHolder.textContent = joke;
}

function randomItemFromArr(arr, lastWord) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === lastWord) return randomItemFromArr(arr, lastWord);
  return item;
}

jokeButton.addEventListener('click', handleClick);
