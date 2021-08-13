const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

const handleClick = (e) => {
  const button = e.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', 600)}" alt="Random image"/ >
    <p>${desc}</p>
  `;
  modalOuter.classList.add('open');
};

const closeModal = () => {
  modalOuter.classList.remove('open');
};

cardButtons.forEach((button) => {
  button.addEventListener('click', (e) => handleClick(e));
});
modalOuter.addEventListener('click', (e) => {
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) closeModal();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
