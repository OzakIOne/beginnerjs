const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let items = [];

const handleSubmit = (e) => {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  e.target.reset();
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
};

const mirrorToLS = () => localStorage.setItem('items', JSON.stringify(items));

const restoreFromLS = () => {
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) items.push(...lsItems);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
};

const deleteItem = (id) => {
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
};

const taskFinished = (id) => {
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
};

const displayItems = () => {
  const html = items
    .map(
      (item) => `<li class="shopping-item">
    <input value="${item.id}" type="checkbox" ${
        item.complete ? `checked` : ``
      } name="item-${item.id}"/>
    <span class="itemName">${item.name}</span>
    <button aria-label="Remove ${item.name} "value="${item.id}">×</button>
  </li>`,
    )
    .join('');
  list.innerHTML = html;
};

shoppingForm.addEventListener('submit', (e) => handleSubmit(e));
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLS);
list.addEventListener('click', (e) => {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) deleteItem(id);
  if (e.target.matches('input[type="checkbox"]')) taskFinished(id);
});

restoreFromLS();
