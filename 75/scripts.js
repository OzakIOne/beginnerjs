const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  fetchAndDisplay(form.query.value);
}

async function fetchAndDisplay(query) {
  form.submit.disable = true;
  const recep = await fetchRecipes(query);
  form.submit.disable = false;
  displayRecipes(recep.results);
}

function displayRecipes(recipes) {
  const html = recipes.map(
    (recipe) => `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
      ${
        recipe.thumbnail &&
        `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`
      }
      <a href="${recipe.href}">View Recipe →</a>
    </div>`,
  );
  recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);
fetchAndDisplay('pizza');
